import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FormatCurrencyProps = {
  currency?: string;
};

export const formatCurrency = (
  amount: number,
  options?: FormatCurrencyProps,
) => {
  const { currency = "GBP" } = options || {};

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
  }).format(amount);
};

export const formatRating = (ratings: number) => {
  return Array.from(
    { length: ratings >= 5 ? 5 : ratings },
    (_, idx) => idx + 1,
  );
};
