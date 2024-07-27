"use client"

import { useEffect } from "react"
import MainLayout from "./layouts/MainLayout"
import ClientOnly from "./components/ClientOnly"
import PostMain from "./components/PostMain"

export default function Home() {

  return (
    <>
      <MainLayout>
        <div className="mt-[80px]  w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClientOnly>
            <PostMain post={{ 
              id: '123',
              user_id: '666',
              video_url: '/test-video.mp4', //! kalo mau pake video
              //! image_url: '/test-image.jpg', //! kalo mau pake image
              text: 'deskripsi',
              created_at: 'ini tanggal dibuat',
              profile: {
                user_id: '666',
                name: 'resto ABC',
                image: 'https://placehold.co/100'
              }
             }}
            />
          </ClientOnly>
        </div>
      </MainLayout>
    </>
  )
}
