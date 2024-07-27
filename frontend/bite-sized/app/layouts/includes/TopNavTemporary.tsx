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
          <div className="flex md:hidden justify-center w-full">
            <Link href="/">
              <img
                className="min-w-[115px] w-[115px]"
                src="/images/BiteSized.png"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-between md:justify-center md:gap-6 w-full mx-auto">
            <Link href="/">
              <img
                className="min-w-[115px] w-[115px]"
                src="/images/BiteSized.png"
                alt="Logo"
              />
            </Link>

            {/* <div className="relative hidden md:flex items-center justify-end bg-[#F1F1F2] p-1 rounded-full max-w-[430px] w-full">
              <input
                type="text"
                onChange={handleSearchName}
                className="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
                placeholder="Lagi mau makan apa..."
              />
              <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                  ini buat hasil rekomendasi search barnya ya
                  nyalain aja kalo udah dipasang AJAX
                <div className="p-1">
                  <Link
                    href={`/profile/1`}
                    className="flex items-center justify-between w-full cursor-pointer hover:bg-[#7f79ac] p-1 px-2 hover:text-white"
                  >
                    <div className="flex items-center">
                      <img
                        className="rounded-md"
                        width="40"
                        src="https://placeholder.co/40"
                        alt="Profile"
                      />
                      <div className="truncate ml-2">Resto ABC</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="px-3 py-1 flex items-center border-l border-l-gray-300">
                <BiSearch color="#A1A2A7" size="22" />
              </div>
            </div> */}

            <div className="flex items-center gap-3 hidden md:flex">
              <button
                onClick={() => goTo()}
                className="flex items-center border rounded-sm py-[6px] hover:bg-gray-100 pl-1.5"
              >
                {/* <AiOutlinePlus color="#000000" size="22" /> */}
                <span className="px-2 font-medium text-[15px]">Upload</span>
              </button>

              {!true ? (
                <div className="flex items-center">
                  <button className="flex items-center bg-[#7f79ac] text-white border rounded-md px-3 py-[6px]">
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

                    {/* <div className="absolute rounded-lg py-1.5 w-[200px] shadow-xl border top-[40px] right-0 bg-white">
                      <button className="flex items-center w-full justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer">
                        <BiUser color="#161724" size="20" />
                        <span className="pl-12 font-semibold text-sm">Profile</span>
                      </button>
                      <button className="flex items-center w-full justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer">
                        <FiLogOut color="#161724" size="20" />
                        <span className="pl-12 font-semibold text-sm">Log out</span>
                      </button>
                    </div> */}
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
