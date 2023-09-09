import Image from "next/image";
import apostrof from 'public/assets/apostrof.png'
import star from 'public/assets/star.png'

export default function ReviewCards() {
    return (
        <div className="flex-col bg-slate-200 p-16 text-2xl font-semibold rounded-md flex text-center">
            <div className="flex flex-col items-start">
              <Image src={apostrof} alt="apostrof" quality={100} width={100} height={100} className="mb-10"/>
              <p>Dynamic review here</p>
            </div>
            <div className="flex items-center justify-between mt-16">
              <p>Dynamic name here</p>
              <div className="p-4 bg-blue-800 rounded-md text-white flex gap-4">
                <p>5</p>
                <Image src={star} alt="star" width={30} height={30}></Image>
              </div>
            </div>
      </div>
      
    );
  }