import Image from "next/image";
import I1 from '@/public/assets/i_icons/i1.svg'
import I2 from '@/public/assets/i_icons/i2.svg'
import I3 from '@/public/assets/i_icons/i3.svg'
import I4 from '@/public/assets/i_icons/i4.svg'
import I5 from '@/public/assets/i_icons/i5.svg'
import I6 from '@/public/assets/i_icons/i6.svg'
import I7 from '@/public/assets/i_icons/i7.svg'
import I8 from '@/public/assets/i_icons/i8.svg'

export default function Usluge() {

  return (
    <section className="relative bg-blackBg py-24">
      <div className="flex flex-col justify-center items-center max-w-[90%] w-full m-auto gap-20">
        <div className="text-center w-full flex flex-col items-center">
          <span className="text-golden text-lg font-bold tracking-widest">Additional Paiting Services</span>
          <h2 className="text-white uppercase text-5xl font-black text-center tracking-wider m-0 mb-8">ALL OUR HOUSE PAINTING AND HOME REMODEL SERVICES</h2>
          <p className="text-opacity-80 text-white leading-6 max-w-2xl m-0 text-lg">At Real Deal Painting, our expertise goes beyond painting houses! We’re also masters of home remodeling services in NW Indiana and the Chicagoland area. From transforming your kitchen and bathroom into stylish and functional spaces to framing and drywall projects, we’ve got you and your walls covered. Our diverse range of services ensures that every corner of your home reflects your taste and lifestyle. Let Real Deal Painting be your partner in turning your house into the home of your dreams!</p>
        </div>
        <ul className="flex flex-row justify-center items-stretch w-full p-0 m-0 flex-wrap gap-5">
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Drywall Install & Repair" src={I1} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3">Drywall Install & Repair</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Experience seamless drywall installation and repair, ensuring smooth walls and flawless finishes for your interiors.</p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Framing" src={I2} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3">Framing</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Achieve structural precision with expert wall framing services, laying a strong foundation that will last.
              </p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Kitchen Remodel" src={I3} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3">Kitchen Remodel</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Unlock your kitchen's potential with remodeling services that blend style, functionality, and expert craftsmanship.
              </p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Bathroom Remodel" src={I4} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3">Bathroom Remodel</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Give your bathroom the a new look with our bathroom remodel services that mix relaxing vibes with sleek design.
              </p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Cabinet Painting" src={I5} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3">Cabinet Painting</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Refresh your cabinetry with expert painting services, adding a splash of elegance and modern flair.
              </p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Fence And Deck Staining" src={I6} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3">Fence And Deck Staining</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Enhance your outdoor space with fence and deck staining services, ensuring lasting beauty and protection.
              </p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Exterior Siding Install" src={I7} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3">Exterior Siding Install</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Elevate your home’s curb appeal with exterior siding services that blend durability, style, and precision installation.
              </p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Commercial Painting" src={I8} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3">Commercial Painting</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Revamp your business space with commercial painting services, delivering professionalism through impeccable finishes and hues.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}