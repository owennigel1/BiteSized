"use client";

import { MenuItemTypes } from "@/app/types";
import Image from "next/image";

export default function MenuItem({
  iconString,
  colorString,
  sizeString,
}: MenuItemTypes) {
  const iconSize = parseInt(sizeString, 10);

  const icons = () => {
    if (iconString === "GrabFood") {
      return (
        <div
          className="relative"
          style={{ width: iconSize, height: iconSize }}
        >
          <Image
            src="/icons/grabfood.svg"
            alt="GrabFood Icon"
            layout="fixed"
            width={iconSize}
            height={iconSize}
            objectFit="contain"
          />
        </div>
      );
    }
    if (iconString === "GrabMart") {
      return (
        <div
          className="relative"
          style={{ width: iconSize, height: iconSize }}
        >
          <Image
            src="/icons/grabmart.svg"
            alt="GrabMart Icon"
            layout="fixed"
            width={iconSize}
            height={iconSize}
            objectFit="contain"
          />
        </div>
      );
    }
  };

  return (
    <>
      <div className="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
        <div className="flex items-center lg:mx-0 mx-auto">
          {icons()}
          <p
            className={`lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px] text-[${colorString}]`}
          >
            {iconString}
          </p>
        </div>
      </div>
    </>
  );
}
