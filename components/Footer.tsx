import Image from 'next/image';
import Link from 'next/link';

import BlackLogo from '@/public/assets/logo.png';
import PhoneIcon from '@/public/assets/phone.svg';
import PinLogo from '@/public/assets/pin.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-stone-950 font-montserrat text-white">
      <div className="mx-auto max-w-[70%] pt-20">
        {/** Top section */}
        <div className="flex w-full justify-between max-lg:flex-col max-lg:items-center">
          <div className="max-lg:mb-10">
            <Link href="/" aria-label="logo">
              <Image alt="logo" src={BlackLogo} />
            </Link>
          </div>
          <div className="flex flex-nowrap">
            <ul className="space-y-5 pr-16">
              <li className="">
                <span className="font-oswald text-2xl font-bold tracking-widest">
                  Stranice
                </span>
              </li>
              <li className="pt-6">
                <span className="linkWithLine hover:text-[darkRed]">
                  Galerija radova
                </span>
              </li>
            </ul>
            <ul className="space-y-5">
              <li className="">
                <span className="font-oswald text-2xl font-bold tracking-widest">
                  Kontakt
                </span>
              </li>
              <li className="flex items-center pt-6">
                <Image alt="phone" width={24} height={24} src={PhoneIcon} />
                <p className="ml-2 hover:text-[darkRed]">+381 63 388323</p>
              </li>
              <li className="cs-li flex items-center">
                <Image alt="location" width={24} height={24} src={PinLogo} />
                <p className="ml-2 hover:text-[darkRed]">
                  Grad Beograd I Okolina
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/** Bottom section */}
        <div className="mt-16 flex w-full items-center justify-center border-t border-grayBorder">
          <span className="my-10 text-center text-base leading-6">
            © Copyright 2023 - Moleraj Beograd
          </span>
        </div>
      </div>
    </footer>
  );
}
