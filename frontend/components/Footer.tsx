import Image from "next/image";
import Link from "next/link";
import BlackLogo from '@/public/assets/logo.png'
import PhoneIcon from '@/public/assets/phone.svg'
import PinLogo from '@/public/assets/pin.svg'

export default function Footer() {
  return (
    <footer className=" bg-stone-950 text-white">
      <div className="mx-auto pt-20 max-w-[70%]">
        {/** Top section */}
        <div className="flex justify-between w-full max-lg:flex-col max-lg:items-center">
          <div className="max-lg:mb-10">
            <Link href='/' aria-label="logo">
              <Image alt="logo" src={BlackLogo}></Image>
            </Link>
          </div>
          <div className="flex-nowrap flex">
            <ul className="pr-16 space-y-5">
              <li className="">
                <span className="tracking-widest text-2xl font-bold">Stranice</span>
              </li>
              <li className="pt-6">
                <span className="hover:text-[darkRed] linkWithLine">Galerija radova</span>
              </li>
              <li className="cs-li">
                 <span className="hover:text-[darkRed] cursor-pointer linkWithLine">Video galerija</span>
              </li>
              <li className="cs-li">
                 <span className="hover:text-[darkRed] cursor-pointer linkWithLine">Recenzije</span>
              </li>
            </ul>
            <ul className="space-y-5">
              <li className="">
                <span className="tracking-widest text-2xl font-bold">Kontakt</span>
              </li>
              <li className="flex items-center pt-6">
                <Image alt="phone" width={24} height={24} src={PhoneIcon}></Image>
                <p className="ml-2 hover:text-[darkRed]">(219) 384-0962</p>
              </li>
              <li className="cs-li flex items-center">
                <Image alt="location" width={24} height={24} src={PinLogo}></Image>
                <p className="ml-2 hover:text-[darkRed]">Grad Beograd I Okolina</p>
              </li>
            </ul>
          </div>
        </div>
        {/** Bottom section */}
        <div className="w-full border-t flex mt-16 justify-center items-center border-grayBorder">
          <span className="my-10 text-center text-base leading-6">
            © Copyright 2023 - Moleraj Beograd
          </span>
        </div>
      </div>
    </footer>
  );
}