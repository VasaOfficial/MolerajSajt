import Image from "next/image";
import ReviewCards from "./ReviewCards";
import rightArrow from '@/public/assets/1.png'
import leftArrow from '@/public/assets/3.png'

export default function Recenzije() {
    return (
      <section className="relative bg-blue-950">
        <div className="m-20 flex flex-col justify-center items-center">
          <div className="flex gap-16">
            <ReviewCards />
            <ReviewCards />
            <ReviewCards />
          </div>
         <div className="mt-10 flex flex-col justify-center items-center"> 
            <div className="flex gap-10">
                <div className="p-3 bg-transparent border border-yellow-400 hover:bg-white">
                    <Image src={leftArrow} alt="left arrow"></Image>
                </div>
                <div className="p-3 bg-transparent border border-yellow-400 hover:bg-white">
                    <Image src={rightArrow} alt="right arrow"></Image>
                </div>
            </div>
            <button className="text-black text-2xl mt-14 font-semibold bg-yellow-500 p-8 hover:text-white">Ostavite Komentar</button>
        </div>
        </div>
      </section>
    );
  }
  