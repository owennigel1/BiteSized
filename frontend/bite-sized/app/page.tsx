"use client"

import MainLayout from "./layouts/MainLayout"
import PostMain from "./components/PostMain"

export default function Home() {
  const posts = [
    //! ini buat contoh aja yakk
    {
      id: '123',
      user_id: '666',
      video_url: '/test-video-2.mp4',
      text: 'Seblak paling pedes seantero semesta. Lokasi Gading Serpong. CUSSSS!!!',
      created_at: 'ini tanggal dibuat',
      profile: {
        user_id: '666',
        name: 'Seblak Uda Nay',
        image: 'https://placehold.co/100',
      },
    },
    {
      id: '124',
      user_id: '667',
      video_url: '/test-video.mp4',
      text: 'deskripsinya di sini',
      created_at: 'ini tanggal dibuat',
      profile: {
        user_id: '667',
        name: 'test ajaaa',
        image: 'https://placehold.co/101',
      },
    },
    {
      id: '125',
      user_id: '668',
      video_url: '/test-video-3.mp4',
      text: 'Ceker Midun! PROMO 1.100 PORSI GRATIS',
      created_at: 'ini tanggal dibuat',
      profile: {
        user_id: '668',
        name: 'Ceker Midun',
        image: 'https://placehold.co/101',
      },
    },
    
  ];

  return (
    <>
      <MainLayout>
        <div className="mt-[80px] w-[calc(100%-90px)] max-w-[690px] ml-auto overflow-y-auto max-h-screen">
          {posts.map((post) => (
            <PostMain key={post.id} post={post} />
          ))}
        </div>
      </MainLayout>
    </>
  );
}
