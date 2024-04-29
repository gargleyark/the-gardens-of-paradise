// package
import Link from "next/link";

// ui
import Logo from "@/ui/assets/logo";
import Button from "@/ui/button";
import {
  CartIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  NotificationCount,
  SearchIcon,
  WishlistIcon,
  YoutubeIcon,
} from "@/ui/assets/svg";

// lib
import { cn } from "@/lib/utils";

const links = [
  {
    id: "home",
    path: "/",
    name: "Home",
  },
  {
    id: "history",
    path: "/history",
    name: "The History of Al-Andalus",
  },
  {
    id: "preorder",
    path: "/preorder",
    name: "Pre-Order",
  },
];

export default function NavMobile({
  onClick,
  open,
}: {
  onClick: () => void;
  open: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-10 grid min-h-[100dvh] w-full grid-cols-[11fr_1fr] transition-transform duration-100 ease-in md:grid-cols-[10fr_2fr] lg:hidden",
        open ? "transform-none touch-none" : "-translate-x-full",
      )}
    >
      <div className="flex h-full flex-col justify-between bg-white p-6">
        {/* top section */}
        <div className="flex flex-col gap-4">
          {/* logo */}
          <div className="flex items-center justify-between">
            <Logo />

            <button onClick={onClick}>
              <CloseIcon className="w-6" />
            </button>
          </div>

          {/* navbar links */}
          <ul className="grid grid-cols-1">
            {links.map((link) => (
              <li
                key={link.id}
                className="border-b border-[#E8ECEF] first:pt-0"
              >
                <Link
                  href={link.path}
                  className="block py-4 font-inter text-sm font-medium text-[#141718]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-full bg-black/30" onClick={onClick}></div>
    </div>
  );
}
