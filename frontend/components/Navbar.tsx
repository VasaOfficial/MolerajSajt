import Image from 'next/image';
import Link from 'next/link';

import BlackLogo from '@/public/assets/logo.png';
import PhoneIcon from '@/public/assets/phone.svg';
import PinLogo from '@/public/assets/pin.svg';

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex max-h-48 w-full items-center border-none bg-blackBg text-white shadow-[0_5px_30px_-10px] shadow-zinc-500">
      <div className="h-full max-h-48 min-h-full bg-darkRed p-5 max-lx:hidden max-md:w-32 max-md:p-2">
        <Link href="/">
          <Image alt="logo" src={BlackLogo} height={325} width={325} />
        </Link>
      </div>
      <div className="flex w-full flex-col gap-y-4 max-lg:gap-y-3 max-lx:hidden">
        <div className="flex w-full justify-end pr-10 pt-4">
          <div className="flex items-center gap-2 border-r-2 border-neutral-600 pr-12">
            <div className="mr-2 rounded-full border-8 border-neutral-600 bg-neutral-600">
              <Image alt="phone" width={24} height={24} src={PhoneIcon} />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-oswald text-lg font-extrabold">
                Pozovite nas
              </h1>
              <p className="font-montserrat">+381 63 338323</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-12">
            <div className="mr-2 rounded-full border-8 border-neutral-600 bg-neutral-600">
              <Image alt="location" width={24} height={24} src={PinLogo} />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-oswald text-lg font-extrabold">Lokacija</h1>
              <p className="font-montserrat">Grad Beograd I Okolina</p>
            </div>
          </div>
        </div>
        <hr className="border-neutral-600" />
        <div className="flex items-center">
          <ul className="flex w-full items-center justify-start gap-9 pl-24 font-oswald uppercase max-lg:pl-10">
            <li className="pb-5">
              <Link
                href="/"
                className="linkWithLine group cursor-pointer font-extrabold text-white hover:text-[darkRed]"
              >
                Početna
                <span className="block max-w-0 bg-white transition-all duration-300 group-hover:max-w-full" />
              </Link>
            </li>
            <li className="pb-5">
              <Link
                href="/galerija"
                className="linkWithLine group cursor-pointer font-extrabold text-white hover:text-[darkRed]"
              >
                Galerija radova
                <span className="block max-w-0 bg-white transition-all duration-300 group-hover:max-w-full" />
              </Link>
            </li>
            <li className="pb-5">
              <Link
                href="/recenzije"
                className="linkWithLine group cursor-pointer font-extrabold text-white hover:text-[darkRed]"
              >
                Recenzije
                <span className="block max-w-0 bg-white transition-all duration-300 group-hover:max-w-full" />
              </Link>
            </li>
          </ul>
          <Link
            href="/admin_interface"
            className="transition-link mb-4 mr-12 cursor-pointer bg-darkRed px-10 py-5 text-center text-lg font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex w-full items-center justify-between lx:hidden">
        <div className="bg-darkRed p-5 max-lx:w-32 max-lx:p-2">
          <Link href="/">
            <Image alt="logo" src={BlackLogo} height={325} width={325} />
          </Link>
        </div>
        <div className="mr-5 min-[840px]:hidden">
          <div className="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul className="menu text-left text-black">
              <li className="pb-5">
                <Link href="/" className="text-xl font-extrabold text-white">
                  Početna
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="/galerija"
                  className="text-xl font-extrabold text-white"
                >
                  Galerija radova
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="/recenzije"
                  className="text-xl font-extrabold text-white"
                >
                  Recenzije
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="/admin_interface"
                  className="text-xl font-extrabold text-white"
                >
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
