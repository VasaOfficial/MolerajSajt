import React from "react";
import Image from "next/image";
import background from "@/public/assets/home.png";
import cover1 from "@/public/assets/painting_cover1.png";

export default function Pocetna() {
  return (
    <div className="relative">
      <Image
        src={background}
        alt="background image"
        quality={100}
        className="w-screen h-screen"
        priority
        
      />
      <div className="absolute flex items-start justify-center inset-0 flex-col px-24 space-y-9">
        <h1 className="font-bold text-5xl leading-normal">
          Naša firma je posvećena pružanju<br/> vrhunskih usluga moleraja i krečenja
          za<br/> transformaciju vaših prostora
        </h1>
        
        <p className=" text-3xl font-bold leading-relaxed text-blue-950">
          Sa stručnim timom iskusnih majstora, nudimo sveobuhvatan spektar<br/>
          usluga - od pripreme površina i odabira boja do precizne izvedbe sa<br/>
          pažnjom na svaki detalj. Bez obzira da li je u pitanju osveženje<br/>
          enterijera ili zaštita eksterijera, mi donosimo boje i inspiraciju u
          vaš<br/> dom ili poslovni prostor. Pregledajte naše dosadašnje radove i<br/>
          pridružite nam se u stvaranju prostora koji odišu estetikom i<br/>
          kvalitetom.
        </p>
      </div>

      <Image
        alt="cover1"
        src={cover1}
        className="absolute left-0 bottom-0 w-screen"
        quality={100}
      />
    </div>
  );
}
