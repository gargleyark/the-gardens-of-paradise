const stripe = require("stripe")(process.env.STRIPE_API_KEY);

export async function POST(request: Request) {
  const data = await request.formData();

  const shippingCountryMatrix = {
    uk: {
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "gbp",
            },
            display_name: "Free UK shipping",
          },
        },
      ],
    },
    europe: {
      shipping_address_collection: {
        allowed_countries: [
          "AT",
          "BE",
          "BR",
          "BG",
          "HR",
          "CY",
          "CZ",
          "DK",
          "EE",
          "FI",
          "FR",
          "DE",
          "GI",
          "GR",
          "HU",
          "IE",
          "IT",
          "LV",
          "LI",
          "LT",
          "LU",
          "MT",
          "NL",
          "NO",
          "PL",
          "PT",
          "RO",
          "SK",
          "SI",
          "ES",
          "SE",
          "CH",
        ],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 500,
              currency: "gbp",
            },
            display_name: "International shipping",
          },
        },
      ],
    },
    other: {
      shipping_address_collection: {
        allowed_countries: ["AU", "CA", "MX", "NZ", "TH", "US", "AE"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "gbp",
            },
            display_name: "International shipping",
          },
        },
      ],
    },
  };

  const getShippingCountry = (country: string): "uk" | "europe" | "other" => {
    if (
      shippingCountryMatrix.uk.shipping_address_collection.allowed_countries.includes(
        country,
      )
    ) {
      return "uk";
    } else if (
      shippingCountryMatrix.europe.shipping_address_collection.allowed_countries.includes(
        country,
      )
    ) {
      return "europe";
    } else {
      return "other";
    }
  };

  const quantity = data.get("quantity");
  const email = data.get("email");
  const shippingCountry = getShippingCountry(data.get("shipping") as string);

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1PAql8DD8Tw7TPoWaAMiWkKM",
          // price: "price_1PAsE2DD8Tw7TPoWwwDRvycm",
          quantity: quantity || 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.REDIRECT_URL}/success`,
      cancel_url: `${process.env.REDIRECT_URL}/order#pre-order`,
      automatic_tax: { enabled: true },
      shipping_options: shippingCountryMatrix[shippingCountry].shipping_options,
      shipping_address_collection: {
        allowed_countries: [data.get("shipping") || "GB"],
      },
      customer_email: email,
    });

    return Response.redirect(session.url, 303);
  } catch (error) {
    return Response.redirect(
      `${process.env.REDIRECT_URL}/order?error=true`,
      303,
    );
  }
}
