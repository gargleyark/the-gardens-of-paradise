import Image from "next/image";

import Button from "@/components/ui/button";
import { WishlistIcon, StarIcon } from "@/components/ui/assets/svg";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatRating } from "@/utils/formatRating";

interface ProductCardProps {
  data: {
    id: number;
    image: {
      src: string;
      alt: string;
    };
    name: string;
    rating: number;
    price: number;
  };
}

export default function ProductCard(props: ProductCardProps) {
  const product = props.data;
  const productRatings = formatRating(product.rating);
  const productPrice = formatCurrency(product.price);

  return (
    <div className="space-y-3">
      {/* card image */}
      <div className="group relative flex h-[308px] flex-col justify-between overflow-hidden bg-[#F3F5F7] p-3.5">
        <div className="z-10 flex items-start justify-between">
          <span className="rounded-[4px] bg-white px-3.5 py-1 font-inter text-base font-bold text-[#121212]">
            NEW
          </span>

          {/* hover button wishlist  */}
          <button className="shadow-[rgba(15, 15, 15, 0.12)] flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-opacity duration-100 group-hover:opacity-100">
            <WishlistIcon className="h-5 w-5" />
          </button>
        </div>

        {/* background image with next image components */}
        <Image
          src={product.image.src}
          width={231}
          height={308}
          alt={product.image.alt}
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        />

        {/* hover button cart */}
        <Button
          intent="primary"
          size="full"
          className="z-10 translate-y-[calc(100%+14px)] transition-transform duration-200 group-hover:translate-y-0"
        >
          Add to cart
        </Button>
      </div>

      {/* card content */}
      <div className="space-y-1">
        <div className="flex gap-0.5">
          {productRatings.map((rating) => (
            <StarIcon key={rating} className="h-4 w-4" />
          ))}
        </div>

        <h4 className="line-clamp-2 font-inter text-base font-semibold text-[#141718]">
          {product.name}
        </h4>

        <p className="font-inter text-sm font-semibold text-[#121212]">
          {productPrice}
        </p>
      </div>
    </div>
  );
}