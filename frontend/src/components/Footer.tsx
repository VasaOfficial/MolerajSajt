import React from "react";
import Image from "next/image";
import footer from "@/public/assets/footer.png";
import cover2 from "@/public/assets/painting_cover2.png";
import fb from "@/public/assets/facebook.png"
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-2xl relative">
      <Image
        src={footer}
        alt="background image"
        quality={100}
        className="w-screen  h-screen"
      />
      <Image
        alt="cover2"
        src={cover2}
        quality={100}
        className="absolute left-0 top-0 w-screen"
      />
      <div className="flex flex-col absolute w-screen items-center justify-end inset-0 p-10 gap-8">
        <h1 className="font-bold ">Mozete nas kontaktirati na broj:</h1>
        <p className="font-semibold mb-10">Tel. 549504864046</p>
        <h1 className="font-bold ">Ili putem emaila:</h1>
        <p className="font-semibold cursor-pointer">email@gmail.com</p>
       <div className="flex">
          <Link href={'/'}>
            <Image
            alt="cover2"
            src={fb}
            width={40}
            height={40}
            className="my-8 cursor-pointer"
          />
          </Link>
        <Link href={'/'}>
          <Image
            alt="cover2"
            src={fb}
            width={40}
            height={40}
            className="my-8 cursor-pointer"
          />
        </Link>
       </div>
      <p className="font-semibold">Copyright © 2023 Ime firm</p>
      </div>
    </div>
  );
}
