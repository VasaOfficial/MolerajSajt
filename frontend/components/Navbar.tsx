import Link from "next/link";
import Image from "next/image";
import PhoneIcon from "@/public/assets/phone.svg";
import BlackLogo from "@/public/assets/logo.png";
import PinLogo from "@/public/assets/pin.svg";

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full bg-blackBg flex items-center text-white shadow-[0_5px_30px_-10px] shadow-zinc-500 border-none max-h-48">
      <div className="bg-darkRed p-5 max-md:p-2 max-md:w-32 max-lx:hidden max-h-48 min-h-full h-full">
        <Link href="/">
          <Image alt="logo" src={BlackLogo} height={325} width={325} />
        </Link>
      </div>
      <div className="flex flex-col gap-y-4 w-full max-lx:hidden max-lg:gap-y-3">
        <div className="flex w-full justify-end pt-4 pr-10">
          <div className="flex items-center gap-2 border-neutral-600 border-r-2 pr-12">
          <div className="border-neutral-600 border-8 bg-neutral-600 rounded-full mr-2">
            <Image alt="phone" width={24} height={24} src={PhoneIcon} />
          </div>
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold font-oswald text-lg">Pozovite nas</h1>
              <p className="font-montserrat">(219) 384-0962</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-12">
            <div className="border-neutral-600 border-8 bg-neutral-600 rounded-full mr-2">
              <Image alt="location" width={24} height={24} src={PinLogo} />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold font-oswald text-lg">Lokacija</h1>
              <p className="font-montserrat">Grad Beograd I Okolina</p>
            </div>
          </div>
        </div>
        <hr className="border-neutral-600"></hr>
        <div className="flex items-center">
          <ul className="flex w-full justify-start gap-9 pl-24 uppercase items-center font-oswald max-lg:pl-10">
            <li className="pb-5">
              <Link href="/" className="font-extrabold group text-white cursor-pointer hover:text-[darkRed] linkWithLine">
                Pocetna
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-white"></span>
              </Link>
            </li>
            <li className="pb-5">
              <Link href="/galerija" className="font-extrabold group text-white cursor-pointer hover:text-[darkRed] linkWithLine">
                Galerija radova
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-white"></span>
              </Link>
            </li>
            <li className="pb-5">
              <Link href="/recenzije" className="font-extrabold group text-white cursor-pointer hover:text-[darkRed] linkWithLine">
                Recenzije
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-white"></span>
              </Link>
            </li>
          </ul>
          <Link href="/admin_interface" className="bg-darkRed text-center cursor-pointer py-5 px-10 font-semibold transition-link mr-12 mb-4 text-lg">
            Login
          </Link>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex items-center justify-between w-full lx:hidden">
        <div className="bg-darkRed p-5 max-lx:p-2 max-lx:w-32">
          <Link href="/">
            <Image alt="logo" src={BlackLogo} height={325} width={325} />
          </Link>
        </div>
        <div className="min-[840px]:hidden mr-5">
          <div className="menuToggle">
            <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            <ul className="menu text-black text-left">
              <li className="pb-5">
                <Link href="/" className="font-extrabold text-xl text-white">
                  Pocetna
                </Link>
              </li>
              <li className="pb-5">
                <Link href="/galerija" className="font-extrabold text-xl text-white">
                  Galerija radova
                </Link>
              </li>
              <li className="pb-5">
                <Link href="/recenzije" className="font-extrabold text-xl text-white">
                  Recenzije
                </Link>
              </li>
              <li className="pb-5">
                <Link href="/admin_interface" className="font-extrabold text-xl text-white">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}