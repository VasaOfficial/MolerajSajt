import React from "react";
import background from "@/public/assets/background2.png";
import Image from "next/image";
import cover2 from "@/public/assets/painting_cover2.png";
import cover1 from "@/public/assets/painting_cover1.png";

export default function Video() {
  return (
    <section className="relative flex flex-col items-center justify-start ">
      <h1 className="absolute top-0 z-10 text-6xl font-bold">Video</h1>
      <Image
        src={background}
        alt="background image"
        className="w-screen "
        style={{ height: "325rem" }}
      />

      <Image
        alt="cover2"
        src={cover2}
        className="absolute left-0 top-0 w-screen"
      />
      <Image
        alt="cover1"
        src={cover1}
        className="absolute left-0 bottom-0 w-screen"
      />

      <div className="flex flex-col gap-10 absolute w-screen items-center pt-72 mt-72">
        <iframe
          style={{ width: "80%", height: "50rem" }}
          className="rounded-xl shadow-2xl"
          src="https://www.youtube.com/embed/V4OHTCliJfU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <iframe
          style={{ width: "80%", height: "50rem" }}
          className="rounded-xl shadow-2xl"
          src="https://www.youtube.com/embed/V4OHTCliJfU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <iframe
          style={{ width: "80%", height: "50rem" }}
          className="rounded-xl shadow-2xl"
          src="https://www.youtube.com/embed/V4OHTCliJfU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          style={{ width: "80%", height: "50rem" }}
          
          className="rounded-xl shadow-2xl"
          src="https://www.youtube.com/embed/V4OHTCliJfU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <iframe
          style={{ width: "80%", height: "50rem" }}
          className="rounded-xl shadow-2xl"
          src="https://www.youtube.com/embed/V4OHTCliJfU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
