// package
import Link from "next/link";
import { usePathname } from "next/navigation";

// ui
import NavDropdown from "@/ui/navbar/navDropdown";
import { NavLinkProps } from "@/ui/navbar/definition";

// lib
import { cn } from "@/lib/utils";

const links: NavLinkProps[] = [
  {
    id: "home",
    path: "/",
    name: "Home",
  },
  {
    id: "history",
    path: "/history",
    name: "The History of Al-Andalus",
    // subLinks: [
    //   {
    //     id: "all-categories",
    //     path: "/shop",
    //     name: "All Categories",
    //   },
    //   {
    //     id: "earphones",
    //     path: "/shop?category=earphones",
    //     name: "Earphones",
    //     subLinks: [
    //       {
    //         id: "earbud",
    //         path: "/shop?category=earphones&type=earbud",
    //         name: "Earbuds",
    //       },
    //       {
    //         id: "iem",
    //         path: "/shop?category=earphones&type=iem",
    //         name: "IEMs (In-Ear Monitors)",
    //       },
    //     ],
    //   },
    //   {
    //     id: "headsets",
    //     path: "/shop?category=headsets",
    //     name: "Headsets (microphone)",
    //     subLinks: [
    //       {
    //         id: "gaming-headset",
    //         path: "/shop?category=gaming-headset",
    //         name: "Gaming Headset",
    //       },
    //     ],
    //   },
    //   {
    //     id: "headphones",
    //     path: "/shop?category=headphones",
    //     name: "Headphones",
    //     subLinks: [
    //       {
    //         id: "bluetooth",
    //         path: "/shop?category=headphones&type=bluetooth",
    //         name: "Bluetooth",
    //       },
    //       {
    //         id: "tws",
    //         path: "/shop?category=headphones&type=tws",
    //         name: "TWS",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: "preorder",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSc0obNp4frWOZH6Oa8Yq7wiAu_p6LAMZ4YdMNz2aMz3lxXOug/viewform?usp=pp_url&entry.1732470099=UK&entry.477204586=1",
    name: "Pre-Order",
    // subLinks: [
    //   {
    //     id: "all-categories",
    //     path: "/shop",
    //     name: "All Categories",
    //   },
  },
  // {
  //   id: "contact-us",
  //   path: "/contact-us",
  //   name: "Contact Us",
  // },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex lg:justify-center lg:gap-10">
      {links.map((link) => (
        <li
          key={link.id}
          className={cn(
            "font-inter text-sm font-medium text-[#141718] hover:opacity-100",
            pathname !== link.path
              ? "opacity-70"
              : "underline underline-offset-2",
          )}
        >
          {link.subLinks ? (
            <NavDropdown link={link} />
          ) : (
            <Link href={link.path}>{link.name}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
