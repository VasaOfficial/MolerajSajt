import React from "react";
import Image from "next/image";
import cover2 from "@/public/assets/painting_cover2.png";
import cover1 from "@/public/assets/painting_cover1.png";
import background from "@/public/assets/background1.png";
import picture from "@/public/assets/before_after.jpg";

export default function GalerijaRadova() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <h1 className="absolute top-0 z-10 text-6xl font-bold">Galerija radova</h1>
      <div className="flex flex-col">
        <Image
          src={background}
          alt="background image"
          quality={100}
          className="w-screen  h-screen"
        />
        <Image
          src={background}
          alt="background image"
          quality={100}
          className="w-screen  h-screen"
        />
        <Image
          src={background}
          alt="background image"
          quality={100}
          className="w-screen  h-screen"
        />
        <Image
          src={background}
          alt="background image"
          quality={100}
          className="w-screen  h-screen"
        />
      </div>

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

      <div className="flex flex-col gap-40 absolute w-screen">
        <div className="flex flex-row-reverse items-center justify-evenly ">
          <Image
            alt="pic1"
            src={picture}
            quality={100}
            width={900}
            height={900}
            className="rounded-xl"
          />
          <div className="flex flex-col items-center">
            <p className="text-center">AAAAAAAAAAAAAAAAAAAAAA</p>
          </div>
        </div>

        <div className="flex items-center justify-evenly ">
          <Image
            alt="pic1"
            src={picture}
            quality={100}
            width={900}
            height={900}
            className="rounded-xl"
          />
          <div className="flex flex-col items-center">
            <p>AAAAAAAAAAAAAAAAAAAAAA</p>
          </div>
        </div>
        <div className="flex  flex-row-reverse items-center justify-evenly">
          <Image
            alt="pic1"
            src={picture}
            quality={100}
            width={900}
            height={900}
            className="rounded-xl"
          />
          <div className="flex flex-col items-center">
            <p>AAAAAAAAAAAAAAAAAAAAAA</p>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <Image
            alt="pic1"
            src={picture}
            quality={100}
            width={900}
            height={900}
            className="rounded-xl"
          />
          <div className="flex flex-col items-center">
            <p>AAAAAAAAAAAAAAAAAAAAAA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
