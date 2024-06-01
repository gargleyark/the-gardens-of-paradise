"use client";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Button from "@/ui/button";
import Heading from "@/ui/head";

// lib
import { cn, formatCurrency } from "@/lib/utils";

// data
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const countries = [
  { country: "Australia", code: "AU" },
  { country: "Austria", code: "AT" },
  { country: "Belgium", code: "BE" },
  { country: "Brazil", code: "BR" },
  { country: "Bulgaria", code: "BG" },
  { country: "Canada", code: "CA" },
  { country: "Croatia", code: "HR" },
  { country: "Cyprus", code: "CY" },
  { country: "Czech Republic", code: "CZ" },
  { country: "Denmark", code: "DK" },
  { country: "Estonia", code: "EE" },
  { country: "Finland", code: "FI" },
  { country: "France", code: "FR" },
  { country: "Germany", code: "DE" },
  { country: "Gibraltar", code: "GI" },
  { country: "Greece", code: "GR" },
  { country: "Hong Kong", code: "HK" },
  { country: "Hungary", code: "HU" },
  { country: "India", code: "IN" },
  { country: "Indonesia", code: "ID" },
  { country: "Ireland", code: "IE" },
  { country: "Italy", code: "IT" },
  { country: "Japan", code: "JP" },
  { country: "Latvia", code: "LV" },
  { country: "Liechtenstein", code: "LI" },
  { country: "Lithuania", code: "LT" },
  { country: "Luxembourg", code: "LU" },
  { country: "Malaysia", code: "MY" },
  { country: "Malta", code: "MT" },
  { country: "Mexico ", code: "MX" },
  { country: "Netherlands", code: "NL" },
  { country: "New Zealand", code: "NZ" },
  { country: "Norway", code: "NO" },
  { country: "Poland", code: "PL" },
  { country: "Portugal", code: "PT" },
  { country: "Romania", code: "RO" },
  { country: "Singapore", code: "SG" },
  { country: "Slovakia", code: "SK" },
  { country: "Slovenia", code: "SI" },
  { country: "Spain", code: "ES" },
  { country: "Sweden", code: "SE" },
  { country: "Switzerland", code: "CH" },
  { country: "Thailand", code: "TH" },
  { country: "United Arab Emirates", code: "AE" },
  { country: "United Kingdom", code: "GB" },
  { country: "United States", code: "US" },
];

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const quantityInput = useRef<HTMLInputElement>(null);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    setQuantity(value);
  };

  useEffect(() => {
    if (quantityInput.current) {
      quantityInput.current.value = quantity.toString();
    }
  }, [quantity]);

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <main>
      {/* Hero section */}
      <SectionLayout
        bg="bg-[#ffc95c]"
        className="flex flex-col items-center justify-between lg:grid lg:grid-cols-1 lg:pt-8"
      >
        {/* Text content */}
        <div className="lg:max-w-nonelg:p-0 flex flex-col items-center gap-4 p-8 ">
          <Heading
            as="h1"
            intent="hero-section"
            className="font-imb_plex_serif"
          >
            Order your copy
          </Heading>
        </div>
      </SectionLayout>

      <SectionLayout>
        <div className="mx-auto space-y-6 p-8 lg:space-y-16">
          <div className="grid grid-cols-1 gap-8 lg:m-auto lg:w-[900px] lg:grid-cols-2">
            <Image
              alt="front cover of The Gardens of Paradise book"
              src="/images/the-gardens-of-paradise.jpg"
              className="m-auto object-contain md:w-1/2 lg:w-full"
              width={896}
              height={1271}
              priority
            />

            <div className="mx-auto max-w-[420px] md:max-w-[520px] lg:flex lg:max-w-none lg:flex-col lg:justify-center">
              <div className="space-y-4 border-b border-[#E8ECEF] pb-6">
                <h1 className="font-poppins text-[40px] font-medium text-[#141718]">
                  The Gardens of Paradise
                </h1>
                <p className="font-poppins text-[18px] font-medium  text-[#141718]">
                  Paperback
                </p>
                <p className="font-inter text-base font-normal text-[#6C7275]">
                  90 newly translated poems from a range of poets across
                  medieval Islamic Spain and Portugal, representing life, death,
                  and changing times across the Iberian Peninsula.
                </p>

                <p className="font-poppins text-[28px] font-medium text-[#141718]">
                  <span className="align-middle">{formatCurrency(12.99)}</span>
                  <span className="ml-3 align-middle text-xl text-[#6C7275] decoration-2">
                    Free UK shipping
                  </span>
                </p>
              </div>

              <div className="space-y-3 border-b border-[#E8ECEF] py-6">
                {/* <Link scroll href="#pre-order" className="block py-1.5"> */}
                <Button
                  fontSize="sm"
                  className="py-1.5 md:text-base"
                  onClick={() => scrolltoHash("pre-order")}
                >
                  Order
                </Button>
                {/* </Link> */}
                <p className="font-inter text-base font-normal text-[#343839]">
                  Launch date June 2024 - Your book will be shipped as soon as
                  it is ready.
                </p>
              </div>
            </div>
          </div>

          {/* <ProductTab tabs={product.tabs} /> */}
        </div>
      </SectionLayout>

      {/* Product section */}
      <SectionLayout>
        <div
          className="m-auto p-8 pt-14 lg:flex lg:w-[1000px] lg:flex-col lg:content-center lg:items-center"
          id="pre-order"
        >
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            Order your copy
          </Heading>

          <div className="space-y-2 px-8 py-2">
            Enter your details below and then checkout to complete your order!
          </div>
          <div className="my-12 space-y-6 rounded-md border border-[#6C7275] p-6 lg:p-16">
            <form action="/api/checkout" method="POST">
              <div className="mb-8 w-full">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-medium text-gray-900 "
                  >
                    Please enter your email
                  </label>
                  <span className="has-[:focus]:border-blue-500 flex justify-between rounded-lg border border-gray-300">
                    <div className="py-auto rounded-l-lg  bg-gray-50 object-contain px-2.5 pt-3 align-middle">
                      <svg
                        className=" h-4 w-4  text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-r-lg  bg-gray-50 p-2.5 text-gray-900 focus:outline-none"
                      placeholder="example@gmail.com"
                    />
                  </span>
                </div>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="shipping"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Select your shipping country
                </label>
                <select
                  id="shipping"
                  name="shipping"
                  defaultValue={"GB"}
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="quantity"
                  className="mb-2 block font-medium text-gray-900 "
                >
                  How many copies would you like to order?
                </label>

                <span className="has-[:focus]:border-blue-500 flex max-w-[8rem] justify-between rounded-lg border border-gray-300">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity"
                    className={cn(
                      "h-11 rounded-s-lg border-0 border-gray-300 p-3 focus:outline-none",
                      quantity === 0 && " bg-white",
                    )}
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                  >
                    <svg
                      className={`h-3 w-3  ${
                        quantity > 1 ? "text-gray-900" : "text-gray-400"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    required
                    type="text"
                    id="quantity"
                    name="quantity"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                    defaultValue={quantity}
                    ref={quantityInput}
                    onChange={handleQuantityChange}
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="quantity"
                    className="h-11 rounded-e-lg border-0 border-gray-300 p-3 focus:outline-none"
                    onClick={increaseQuantity}
                  >
                    <svg
                      className="h-3 w-3 text-gray-900 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </span>
              </div>

              <button
                className="mb-2 me-2 cursor-pointer rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                type="submit"
              >
                Go to checkout
              </button>
              <Image
                src="/images/payment-options.png"
                alt="Checkout"
                className="m-auto w-[220px] object-contain pt-4 lg:pt-12"
                width={620}
                height={96}
              />
            </form>
          </div>
        </div>
      </SectionLayout>
    </main>
  );
}
