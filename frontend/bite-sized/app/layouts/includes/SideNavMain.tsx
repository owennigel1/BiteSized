import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ClientOnly from "@/app/components/ClientOnly";
import MenuItem from "./MenuItem";
import MenuItemFollow from "./MenuItemFollow";

export default function SideNavMain() {
  const pathname = usePathname();

  return (
    <>
      <div
        id="SideNavMain"
        className={`
                    fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
                    ${pathname === "/" ? "lg:w-[310px]" : "lg:w-[220px]"}
                `}
      >
        <div className="lg:w-full w-[55px] mx-auto">
          <Link href="/">
            <MenuItem
              iconString="For You"
              colorString={pathname == "/" ? "#7f79ac" : ""}
              sizeString="25"
            />
          </Link>
          <MenuItem
            iconString="Following"
            colorString="#000000"
            sizeString="25"
          />

          <div className="border-b lg:ml-2 mt-2" />
          <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
            Rekomendasi restoran
          </h3>

          <div className="lg:hidden block pt-3" />
          <ClientOnly>
            <div className="cursor-pointer">
              <MenuItemFollow
                user={{
                  id: "1",
                  name: "Test user",
                  image: "https://placeholder.co/400",
                }}
              />
            </div>
          </ClientOnly>

          <button className="lg:block hidden text-[#7f79ac] pt-1.5 pl-2 text-[13px]">
            Lihat semua
          </button>

          {true ? (
            <div>
              <div className="border-b lg:ml-2 mt-2" />
              <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Rekomendasi restoran
              </h3>

              <div className="lg:hidden block pt-3" />
              <ClientOnly>
                <div className="cursor-pointer">
                  <MenuItemFollow
                    user={{
                      id: "1",
                      name: "Test user",
                      image: "https://placeholder.co/400",
                    }}
                  />
                </div>
              </ClientOnly>

              <button className="lg:block hidden text-[#7f79ac] pt-1.5 pl-2 text-[13px]">
                Lainnya
              </button>
            </div>
          ) : null}
          <div className="lg:block hidden border-b lg:ml-2 mt-2" />

          <div className="lg:block hidden text-[11px] text-gray-500">
            <p className="pt-4 px-2">
              {/* bisa diisi sesuatu nanti */}
              Ceritanya Terms & Conditions
            </p>
            <p className="pt-4 px-2">
              Help Safety Terms Privacy Creator Portal Community Guidelines
            </p>
            <p className="pt-4 px-2">© 2024 BiteSized</p>
          </div>
        </div>
      </div>
    </>
  );
}
