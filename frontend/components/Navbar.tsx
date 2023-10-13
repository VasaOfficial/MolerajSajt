import Link from "next/link";
import Image from "next/image";
import PhoneIcon from "@/public/assets/phone.svg";
import BlackLogo from "@/public/assets/logo.png";
import PinLogo from "@/public/assets/pin.svg";

export default function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 w-full bg-blackBg flex items-center text-white shadow-[0_5px_30px_-10px] shadow-zinc-500 border-none ">
      <div className="bg-darkRed">
        <Link href="/">
          <Image alt="logo" src={BlackLogo} height={350} width={350}></Image>
        </Link>
      </div>
      <div className="flex flex-col gap-y-6  w-full  first-letter: ">
        <ul className="flex w-full justify-end gap-16 pr-5  h-6  ">
          <li className="flex items-center gap-2">
            <Image alt="phone" width={30} height={30} src={PhoneIcon}></Image>
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold">Pozovite nas</h1>
              <p className="hover:text-[darkRed] cursor-pointer hover:underline">
                (219) 384-0962
              </p>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <Image alt="location" width={24} height={24} src={PinLogo}></Image>
            <div className="flex flex-col items-center ">
              <h1 className="font-extrabold ">Lokacija</h1>
              <p className="">Grad Beograd I Okolina</p>
            </div>
          </li>
        </ul>
        <hr className=" border-darkRed"></hr>
        <div className="flex items-center">
          <ul className="flex w-full justify-start gap-9 pl-24 uppercase items-center">
            <li>
              <Link
                href="/"
                className="font-extrabold group  text-white  cursor-pointer "
              >
                Pocetna
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-extrabold group  text-white  cursor-pointer "
              >
                Galerija radova
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
              </Link>
            </li>
          </ul>

          <Link
            href="/"
            className="bg-darkRed text-center uppercase cursor-pointer py-1 font-semibold transition-link mr-24 "
          >
            Procitajte sve recenzije
          </Link>
        </div>
      </div>
    </nav>
  );
}
