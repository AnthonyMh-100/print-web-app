"use client";
import { useState } from "react";
import Link from "next/link";
import {
  IoHomeOutline,
  IoBriefcaseOutline,
  IoPeopleOutline,
  IoCallOutline,
} from "react-icons/io5";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  {
    path: "/",
    label: "Inicio",
    icon: <IoHomeOutline />,
  },

  {
    path: "/services",
    label: "Servicios",
    icon: <IoBriefcaseOutline />,
  },
  {
    path: "/about",
    label: "Nosotros",
    icon: <IoPeopleOutline />,
  },
  {
    path: "/contacts",
    label: "Contactos",
    icon: <IoCallOutline />,
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="bg-white border-b border-gray-100 px-12">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="min-w-8 h-8 rounded-lg flex items-center justify-center">
            <Image src="/img/logo-bear.png" width={65} height={50} alt="bear" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-[#0c2340]">Grafikrea</p>
            <p className="text-[11px] text-[#378ADD]">Diseño & Impresión</p>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map(({ path, label, icon }) => {
            const isActive = pathName === path;

            return (
              <Link
                href={path}
                key={path}
                className={`
          relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium
          transition-all duration-200 ease-out
          ${
            isActive
              ? "bg-[#0c2340] text-white shadow-sm"
              : "text-[#4a6080] hover:text-[#0c2340] hover:bg-[#f3f6fb]"
          }
        `}
              >
                <span
                  className={`${isActive ? "text-white" : "text-[#185FA5]"}`}
                >
                  {icon}
                </span>

                <span>{label}</span>
              </Link>
            );
          })}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span
            className={`w-5 h-0.5 bg-[#0c2340] block transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-[#0c2340] block transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-[#0c2340] block transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 px-8 py-4 flex flex-col gap-4">
          {navLinks.map(({ path, label, icon }) => {
            const isActive = pathName === path;

            return (
              <Link
                href={path}
                key={path}
                className={`
          relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium
          transition-all duration-200 ease-out
          ${
            isActive
              ? "bg-[#0c2340] text-white shadow-sm"
              : "text-[#4a6080] hover:text-[#0c2340] hover:bg-[#f3f6fb]"
          }
        `}
              >
                <span
                  className={`${isActive ? "text-white" : "text-[#185FA5]"}`}
                >
                  {icon}
                </span>

                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};
