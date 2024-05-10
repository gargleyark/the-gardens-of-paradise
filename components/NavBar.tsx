"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { CloseIcon, HamburgerMenu } from "@/ui/assets/svg";
import Logo from "./ui/assets/logo";

type Link = {
  path: string;
  name: string;
};

const links: Link[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/history",
    name: "The History of Al-Andalus",
  },
  {
    path: "/preorder",
    name: "Pre-Order",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scroll, setScroll] = useState<boolean>(false);
  const [showMobNavBar, setShowMobNav] = useState<boolean>(false);

  const handleOnScroll = () => {
    window.scrollY >= 32 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);

    return () => window.removeEventListener("scroll", handleOnScroll);
  }, []);

  if (showMobNavBar) {
    return (
      <div
        className={cn(
          "flex flex-row lg:hidden",
          "sticky top-0 justify-start px-8 py-4",
          isHomePage ? "bg-[#ffc95c]" : "bg-white",
          scroll && "bg-white shadow transition-colors duration-200 ease-in",
        )}
      >
        <button onClick={() => setShowMobNav(true)}>
          <HamburgerMenu className="w-6" />
        </button>

        {showMobNavBar && (
          <div
            className={cn(
              "absolute left-0 top-0 z-10 grid min-h-[100dvh] w-full grid-cols-[11fr_1fr] transition-transform duration-100 ease-in md:grid-cols-[10fr_2fr] lg:hidden",
              showMobNavBar ? "transform-none touch-none" : "-translate-x-full",
            )}
          >
            <div className="flex h-full flex-col justify-between bg-white p-6">
              <div className="flex flex-col gap-4">
                <span className="flex justify-between">
                  <Logo />
                  <button onClick={() => setShowMobNav(false)}>
                    <CloseIcon className="w-6" />
                  </button>
                </span>
                <nav className="grid grid-cols-1 divide-y divide-[#E8ECEF]">
                  {links.map(({ name, path }) => (
                    <Link
                      key={`mob-nav-${name}`}
                      href={path}
                      className="block py-4 text-sm font-medium text-[#141718]"
                    >
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            {/* div below is for clicking away */}
            <div
              className="h-full bg-black/30"
              onClick={() => setShowMobNav(false)}
            ></div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <>
        <nav
          className={cn(
            "hidden flex-row lg:flex",
            "sticky top-0 justify-center gap-6 px-8 py-4",
            isHomePage ? "bg-[#ffc95c]" : "bg-white",
            scroll && "bg-white shadow transition-colors duration-200 ease-in",
          )}
        >
          {links.map(({ path, name }) => {
            return (
              <Link
                key={`nav-${name}`}
                href={path}
                className={cn(
                  "font-inter text-sm font-medium text-[#141718] hover:opacity-100",
                  pathname !== path
                    ? "opacity-70"
                    : "underline underline-offset-2",
                )}
              >
                {name}
              </Link>
            );
          })}
        </nav>
      </>
    );
  }
}
