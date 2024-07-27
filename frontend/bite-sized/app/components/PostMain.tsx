"use client";

import React, { useEffect } from "react";
import { PostMainCompTypes } from "../types";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { ImMusic } from "react-icons/im";

export default function ClientOnly({ post }: PostMainCompTypes) {
  useEffect(() => {
    const video = document.getElementById(
      `video-${post?.id}`
    ) as HTMLVideoElement;
    const postMainElement = document.getElementById(`PostMain-${post.id}`);

    if (postMainElement) {
      let observer = new IntersectionObserver(
        (entries) => {
          entries[0].isIntersecting ? video.play() : video.pause();
        },
        { threshold: [0.6] }
      );

      observer.observe(postMainElement);
    }
  }, [post.id]);

  return (
    <div id={`PostMain-${post.id}`} className="flex border-b py-6">
      <div className="cursor-pointer">
        <img
          className="rounded-full max-h-[60px]"
          width="60"
          src={post?.profile?.image}
          alt="Profile"
        />
      </div>

      <div className="pl-3 w-full px-4">
        <div className="flex items-center justify-between pb-0.5">
          <Link href={`/profile/${post.profile.user_id}`}>
            <span className="font-bold hover:underline cursor-pointer">
              {post.profile.name}
            </span>
          </Link>

          <button className="border text-[15px] px-[21px] py-0.5 border-[#7f79ac] text-[#7f79ac] hover:bg-[#ffeef2] font-semibold rounded-md">
            Langganan
          </button>
        </div>
        <p className="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">
          {post.text}
        </p>
        <p className="text-[14px] text-gray-500 pb-0.5">
          #jajanan #pedas #seblak #aura100000
          {/* ini tolong dibuat berdasarkan hasil scrapping-nya ya */}
          {/* bisa juga berdasarkan penjual ngasih tagnya apa */}
        </p>
        <div className="mt-2.5 flex">
          <div className="relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer">
            <video
              id={`video-${post.id}`}
              loop
              controls
              muted
              className="rounded-xl object-cover mx-auto h-full"
              src={post?.video_url}
            />
            <img
              className="absolute right-2 bottom-10"
              width="90"
              src="/images/BiteSized.png" //! dikasih watermark biar +100000 aura
              alt="Watermark"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
