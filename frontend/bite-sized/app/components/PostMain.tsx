"use client";

import React, { useEffect } from "react";
import { PostMainCompTypes } from "../types";
import Link from "next/link";

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
    <div id={`PostMain-${post.id}`} className="flex flex-col items-center justify-center h-full mb-6">
      <div className="relative w-full h-full">
        <video
          id={`video-${post.id}`}
          loop
          controls
          muted
          className="object-cover w-full h-full rounded-lg border-2 border-gray-300"
          src={post?.video_url}
        />
        <div className="absolute bottom-16 left-2 text-white p-2 rounded">
          <div className="text-lg font-bold">{post.profile.name}</div>
          <div className="text-sm">{post.text}</div>
        </div>
        <img
          className="absolute right-2 bottom-10 z-0"
          width="90"
          src="/images/BiteSized.png"
          alt="Watermark"
        />
      </div>
    </div>
  );
}
