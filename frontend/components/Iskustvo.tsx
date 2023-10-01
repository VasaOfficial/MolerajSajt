import Image from "next/image";
import neighborhood from '@/public/assets/neighborhood.jpg'
import s1 from '@/public/assets/s_icons/s1.svg'
import s2 from '@/public/assets/s_icons/s2.svg'
import s3 from '@/public/assets/s_icons/s3.svg'
import s4 from '@/public/assets/s_icons/s4.svg'

export default function Iskustvo() {
  return (
    <section className="relative bg-black py-24 text-center z-10 m-w-[90%]">
      <div className="w-full m-auto flex flex-col items-center gap-16">
        <div className="text-center w-full flex flex-col items-center">
          <span className="text-golden text-lg font-bold tracking-widest">EXPERIENCE</span>
          <h2 className="text-white uppercase text-5xl font-black text-center tracking-wider m-0 mb-8">WHY CHOOSE REAL DEAL PAINTING?</h2>
          <p className="text-opacity-80 text-white leading-6 max-w-2xl m-0 text-lg">We stand by our work with a 100% workmanship guarantee and if you have any concerns or issues with any part of the finished job we will make sure that are addressed and resolved. Our number 1 goal is to leave every client satisfied and 100% happy with our work. If you're looking for a painting contractor to do the job right the first time, look no further!</p>
        </div>
        <ul className="flex flex-row justify-center flex-wrap items-stretch m-0 p-0 text-white max-w-full gap-x-5 gap-y-10">
          <li className="w-1/4 max-w-sm">
            <div className="w-24 h-24 m-auto mb-6 bg-white flex items-center justify-center">
              <Image alt="s1" src={s1} width={38} height={38}></Image>
            </div>
            <h3 className="text-xl font-bold m-0 mb-3">CUSTOMER EXPERIENCE</h3>
            <p className="text-base m-0">Our priority is making sure you have a seamless experience from start to finish and you love your home's new look 100%.</p>
          </li>
          <li className="w-1/4 max-w-sm">
            <div className="w-24 h-24 m-auto mb-6 bg-white flex items-center justify-center">
              <Image alt="s2" src={s2} width={38} height={38}></Image>
            </div>
            <h3 className="text-xl font-bold m-0 mb-3">100% SATISFACTION</h3>
            <p className="text-base m-0">We will guarantee you are satisfied with our work and see to it that all jobs are looked over twice upon completion.</p>
          </li>
          <li className="w-1/4 max-w-sm">
            <div className="w-24 h-24 m-auto mb-6 bg-white flex items-center justify-center">
              <Image alt="s3" src={s3} width={38} height={38}></Image>
            </div>
            <h3 className="text-xl font-bold m-0 mb-3">FAIR PRICING</h3>
            <p className="text-base m-0">We know exactly how much to bid for each job and we refuse to overbid or inflate those costs and still provide the highest quality workmanship</p>
          </li>
          <li className="w-1/4 max-w-sm">
            <div className="w-24 h-24 m-auto mb-6 bg-white flex items-center justify-center">
              <Image alt="s4" src={s4} width={38} height={38}></Image>
            </div>
            <h3 className="text-xl font-bold m-0 mb-3">FULLY INSURED</h3>
            <p className="text-base m-0">We are a fully insured, licensed, and bonded company so you can rest assured that you are always protected.</p>
          </li>
        </ul>
      </div>
      <div className="neighborhood">
        <Image src={neighborhood} alt="neighborhood" fill={true}/>
      </div>
    </section>
  );
}