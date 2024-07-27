import React, { useState } from "react";
import SideNavMain from "./includes/SideNavMain";
import TopNav from "./includes/TopNav";
import { usePathname, useRouter } from "next/navigation";
import { useSwipeable } from "react-swipeable";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [swipedLeft, setSwipedLeft] = useState(false);
  const [swipedRight, setSwipedRight] = useState(false);

  //! link dummy. ganti aja kalo udah ada logicnya
  const grabFoodLink = "https://food.grab.com/id/id/";

  const handlers = useSwipeable({
    onSwipedRight: () => {
      setSwipedRight(true);
      setTimeout(() => setSwipedRight(false), 300);
    },
    onSwipedLeft: () => {
      setSwipedLeft(true);
      setTimeout(() => {
        setSwipedLeft(false);
        window.open(grabFoodLink, "_blank"); // buka link grabfood
      }, 300);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="fixed top-0 w-full z-10 bg-transparent">
        <TopNav />
      </div>
      <div className={`flex flex-col lg:flex-row justify-between mx-auto w-full lg:px-2.5 px-0 pt-[60px] ${pathname === '/' ? 'max-w-[1140px]' : ''}`}>
        <div className="hidden lg:block">
          <SideNavMain />
        </div>
        <div {...handlers} className={`flex-1 w-full h-full relative ${swipedLeft ? 'animate-swipe-left' : ''} ${swipedRight ? 'animate-swipe-right' : ''}`}>
          {children}
          {swipedRight && (
            <div className="absolute top-0 left-0 w-full h-full bg-white flex items-center justify-center text-black text-xl">
              Mengarahkan ke GrabFood...
            </div>
          )}
        </div>
      </div>
    </>
  );
}
