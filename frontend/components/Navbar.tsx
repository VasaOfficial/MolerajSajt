import Link from "next/link";
import Image from "next/image";
import PhoneIcon from "@/public/assets/phone.svg";
import BlackLogo from "@/public/assets/logo.png";
import PinLogo from "@/public/assets/pin.svg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-blackBg flex items-center text-white shadow-[0_5px_30px_-10px] shadow-zinc-500 border-none">
      <div className="bg-darkRed p-5">
        <Link href="/">
          <Image alt="logo" src={BlackLogo} height={325} width={325} />
        </Link>
      </div>
      <div className="flex flex-col gap-y-6 w-full">
        <div className="flex w-full justify-end pt-4 pr-10">
          <div className="flex items-center gap-2 border-neutral-600 border-r-2 pr-12">
          <div className="border-neutral-600 border-8 bg-neutral-600 rounded-full mr-2">
            <Image alt="phone" width={24} height={24} src={PhoneIcon} />
          </div>
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold">Pozovite nas</h1>
              <p >(219) 384-0962</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-12">
            <div className="border-neutral-600 border-8 bg-neutral-600 rounded-full mr-2">
              <Image alt="location" width={24} height={24} src={PinLogo} />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold ">Lokacija</h1>
              <p>Grad Beograd I Okolina</p>
            </div>
          </div>
        </div>
        <hr className="border-neutral-600"></hr>
        <div className="flex items-center">
          <ul className="flex w-full justify-start gap-9 pl-24 uppercase items-center">
            <li className="pb-5">
              <Link href="/" className="font-extrabold group text-white cursor-pointer hover:text-[darkRed] linkWithLine">
                Pocetna
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-white"></span>
              </Link>
            </li>
            <li className="pb-5">
              <Link href="/" className="font-extrabold group text-white cursor-pointer hover:text-[darkRed] linkWithLine">
                Galerija radova
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-white"></span>
              </Link>
            </li>
          </ul>
          <Link href="/login" className="bg-darkRed text-center cursor-pointer py-4 px-10 font-semibold transition-link mr-12 mb-4 text-lg">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}