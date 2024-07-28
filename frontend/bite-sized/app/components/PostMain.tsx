"use client";

import React, { useEffect } from "react";
import { PostMainCompTypes } from "../types";

export default function ClientOnly({ post }: PostMainCompTypes) {
  useEffect(() => {
    const video = document.getElementById(`video-${post?.id}`) as HTMLVideoElement;
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
    <div id={`PostMain-${post.id}`} className="flex flex-col items-center justify-center w-screen h-screen lg:w-auto lg:h-auto mb-0 mt-0 lg: mb-6 lg:mt-5">
      

      <div className="relative w-full h-full">
        <video
          id={`video-${post.id}`}
          loop
          controls
          muted
          className="object-cover w-full h-full lg:rounded-lg lg:border-2 lg:border-gray-300"
          src={post?.video_url}
        />

        <div className="absolute bottom-4 left-4 flex flex-col items-center justify-center">
          <div className="absolute bottom-40 left-0">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <img
                src="/icons/cart.svg"
                alt="Cart Icon"
                className="w-12 h-12 text-white"
              />
            </div>
            <button className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center border-none shadow-md ">
            </button>
          </div>

          <div className="w-full flex flex-col items-center md:items-start md:absolute md:top-4 md:left-0 md:rounded-lg md:px-0 md:py-2 bg-transparent p-2 text-white md:static md:relative mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gainsboro-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
          </div>
          <div className="text-lg font-bold">
            {post.profile.name}
            <div className="text-sm font-medium mt-1 flex gap-4">
              <span>★ 5.0</span>
              <span>🕒 3m</span>
              <span>1km</span>
            </div>
          </div>
        </div>
        <p className="font-extralight mt-1" style={{ color: 'gainsboro' }}>ini deskripsi toko</p>
        <div className="text-sm mt-1">{post.text}</div>
        <p className="font-extralight mt-1" style={{ color: '#00B14F' }}>#jajan #pedas</p>
      </div>
        </div>

        {/* <img
          className="absolute left-4 top-60 z-0"
          width="90"
          src="/logo.svg"
          alt="Watermark"
        /> */}
      </div>
    </div>
  );
}
