"use client";

import MainLayout from "./layouts/MainLayout";
import PostMain from "./components/PostMain";

export default function Home() {
  const posts = [
    {
      id: '123',
      user_id: '666',
      video_url: '/test-video-2.mp4',
      text: 'Seblak LVL 10000',
      created_at: 'ini tanggal dibuat',
      profile: {
        user_id: '666',
        name: 'Seblak Uda Nay',
        image: 'https://placehold.co/100',
      },
    },
    {
      id: '123',
      user_id: '666',
      video_url: '/test-video.mp4',
      text: 'test deskripsi',
      created_at: 'ini tanggal dibuat',
      profile: {
        user_id: '666',
        name: 'Test',
        image: 'https://placehold.co/100',
      },
    },
    {
      id: '123',
      user_id: '666',
      video_url: '/test-video-3.mp4',
      text: 'Ceker Mercon!!! Promo 1.100 porsi GRATIS!',
      created_at: 'ini tanggal dibuat',
      profile: {
        user_id: '666',
        name: 'Ceker Midun',
        image: 'https://placehold.co/100',
      },
    },
  ];

  return (
    <>
      <MainLayout>
        <div className="flex flex-col items-center justify-center w-full h-full">
          {posts.map((post) => (
            <PostMain key={post.id} post={post} />
          ))}
        </div>
      </MainLayout>
    </>
  );
}
