import Image from "next/image";
import Link from "next/link";
import BlackLogo from '@/public/assets/logo.png'
import PhoneIcon from '@/public/assets/phone.svg'
import PinLogo from '@/public/assets/pin.svg'

export default function Footer() {
  return (
    <footer className=" bg-blackBg text-white">
      <div className="mx-auto pt-20 max-w-[70%]">
        {/** Top section */}
        <div className="flex justify-between w-full">
          <div>
            <Link href='/' aria-label="logo">
              <Image alt="logo" src={BlackLogo}></Image>
            </Link>
          </div>
          <div className="flex-nowrap flex">
            <ul className="pr-16 space-y-5">
              <li className="">
                <span className="tracking-widest text-2xl font-bold">Quick Links</span>
              </li>
              <li className="pt-6">
                <span className="hover:text-[darkRed] linkWithLine">Painters In Highland</span>
              </li>
              <li className="cs-li">
                 <span className="hover:text-[darkRed] cursor-pointer linkWithLine">Painters In Highland</span>
              </li>
              <li className="cs-li">
                 <span className="hover:text-[darkRed] cursor-pointer linkWithLine">Painters In Highland</span>
              </li>
              <li className="cs-li">
                 <span className="hover:text-[darkRed] cursor-pointer linkWithLine">Painters In Highland</span>
              </li>
            </ul>
            <ul className="pr-16 space-y-5">
              <li className="">
                <span className="tracking-widest text-2xl font-bold">Services</span>
              </li>
              <li className="pt-6">
                 <span className="hover:text-[darkRed] cursor-pointer linkWithLine">Painters In Highland</span>
              </li>
              <li className="cs-li">
                 <span className="hover:text-[darkRed] cursor-pointer linkWithLine">Painters In Highland</span>
              </li>
              <li className="cs-li">
                 <span className="hover:text-[darkRed] cursor-pointer linkWithLine">Painters In Highland</span>
              </li>
              <li className="cs-li">
                 <span className="hover:text-[darkRed] cursor-pointer linkWithLine">Painters In Highland</span>
              </li>
            </ul>
            <ul className="space-y-5">
              <li className="">
                <span className="tracking-widest text-2xl font-bold">Contact</span>
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
        {/** Middle section */}
        <div className="my-8">
          <ul className="flex gap-10">
            <li className="cs-li">
              <span className="cs-header hover:text-[darkRed] linkWithLine">Home</span>
            </li>
            <li className="cs-li">
              <span className="cs-header hover:text-[darkRed] linkWithLine">Home</span>
            </li>
            <li className="cs-li">
              <span className="cs-header hover:text-[darkRed] linkWithLine">Home</span>
            </li>
            <li className="cs-li">
              <span className="cs-header hover:text-[darkRed] linkWithLine">Home</span>
            </li>
            <li className="cs-li">
              <span className="cs-header hover:text-[darkRed] linkWithLine">Home</span>
            </li>
          </ul>
        </div>
        {/** Bottom section */}
        <div className="w-full md:w-auto border-t flex justify-center items-center border-grayBorder">
          <span className="my-10 text-center text-base leading-6">
            © Copyright 2023 - Moleraj Beograd
          </span>
        </div>
      </div>
    </footer>
  );
}
