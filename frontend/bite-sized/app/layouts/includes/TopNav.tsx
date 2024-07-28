import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSearchName = (event: { target: { value: string } }) => {
    console.log(event.target.value);
  };

  const goTo = () => {
    console.log("di sini");
  };

  return (
    <>
      <div
        id="TopNav"
        className="fixed bg-transparent md:bg-white z-30 flex items-center w-full h-[60px] px-4"
      >
        <div
          className={`flex items-center justify-between w-full mx-auto ${
            pathname === "/" ? "max-w-[1150px]" : ""
          }`}
        >
          <div className="flex justify-center">
            <Link href="/">
              <img
                className="min-w-[144px] w-[144px]"
                src="/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-end md:gap-6 w-full ">

            <div className="flex items-center justify-end gap-3 hidden md:flex">
              <button
                onClick={() => goTo()}
                className="flex items-center border rounded-sm py-[6px] hover:bg-gray-100 pl-1.5"
              >
                <span className="px-2 font-medium text-[15px]">Upload</span>
              </button>

              {!true ? (
                <div className="flex items-center">
                  <button className="flex items-center bg-[#00B14F] text-white border rounded-md px-3 py-[6px]">
                    <span className="whitespace-nowrap mx-4 font-medium text-[15px]">Log in</span>
                  </button>
                  <BsThreeDotsVertical color="#161724" size="25" />
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="relative">
                    <button className="mt-1 border-gray-200 rounded-full">
                      <img className="rounded-full w-[35px] h-[35px]" src="https://placeholder.co/35" alt="Profile" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
