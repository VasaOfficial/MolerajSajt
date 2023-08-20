import React from "react";
import background from "@/public/assets/background2.png";
import Image from "next/image";
import cover2 from "@/public/assets/painting_cover2.png";
import cover1 from "@/public/assets/painting_cover1.png";
import video from "@/public/assets/video.jpg";

export default function Video() {
  return (
    <div className="relative flex flex-col items-center justify-start ">
    <h1 className="absolute top-0 z-10 text-6xl font-bold">Video</h1>
      <Image
        src={background}
        alt="background image"
        quality={100}
        className="w-screen "
      />

      <Image
        alt="cover2"
        src={cover2}
        quality={100}
        className="absolute left-0 top-0 w-screen"
      />
      <Image
        alt="cover1"
        src={cover1}
        quality={100}
        className="absolute left-0 bottom-0 w-screen"
      />

      <div className="flex flex-col gap-6 absolute w-screen items-center pt-64 mt-72">
        <div className=" flex gap-32">
          <Image
            alt="pic1"
            src={video}
            quality={100}
            width={800}
            height={800}
            className="rounded-xl"
          />
          <Image
            alt="pic1"
            src={video}
            quality={100}
            width={800}
            height={800}
            className="rounded-xl"
          />
        </div>
        <div>
          <Image
            alt="pic1"
            src={video}
            quality={100}
            width={800}
            height={800}
            className="rounded-xl"
          />
        </div>
        <div className="flex gap-32">
          <Image
            alt="pic1"
            src={video}
            quality={100}
            width={800}
            height={800}
            className="rounded-xl"
          />
          <Image
            alt="pic1"
            src={video}
            quality={100}
            width={800}
            height={800}
            className="rounded-xl"
          />
        </div>
        <div>
          <Image
            alt="pic1"
            src={video}
            quality={100}
            width={800}
            height={800}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
