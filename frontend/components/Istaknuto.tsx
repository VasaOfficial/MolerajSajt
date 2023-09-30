import Image from "next/image";
import IstaknutaSlika from '@/public/assets/istaknuto.jpg'
export default function Istaknuto() {

  return (
    <section className="relative bg-stone-950 py-24 h-auto">
      <div className="flex justify-center items-center w-full m-auto gap-20">
        <div className="text-center w-full flex flex-col items-start max-w-[40%] h-auto">
          <span className="text-golden text-lg font-bold tracking-widest text-left">Featured Service</span>
          <h2 className="text-white uppercase text-5xl font-black text-left tracking-wider m-0 mb-8">KITCHEN AND BATHROOM REMODEL CONTRACTORS</h2>
          <p className="text-left text-opacity-80 text-white leading-6 max-w-2xl m-0">Kitchens are meant to be the soul of the home, and a dated one hardly feels inviting. Whether you're thinking of refreshing elements like the backsplash and countertops or opting for a complete makeover, adding your personal touch to your kitchen is essential. Popular kitchen remodel elements include quartz and stone countertops, custom cabinetry, LED lighting, layout reconfiguration, bespoke backsplashes, butler’s pantries, wet/dry bars, window upgrades, open floor concepts, and soft-close drawers.
          <br />
          <br />
          But why stop at the kitchen? Let’s bring that same finesse into your bathroom. At Real Deal Painting, we also offer professional bathroom remodel services in NW Indiana and Chicagoland area. Our experts will work with you to create a tranquil oasis that caters to your needs. Whether it’s modernizing fixtures, optimizing storage, or installing that luxurious walk-in shower you’ve always dreamed of, we’re here to transform your bathroom into a spa-like retreat, perfectly in sync with the refreshed ambiance of your newly remodeled kitchen. Let’s reinvent your spaces, one room at a time.
          </p>
        </div>
        <div className="relative">
          <div className="z-2 absolute bottom-[50px] left-[-100px] px-7 py-9 bg-darkRed flex flex-col text-center gap-2 text-white">
            <span className="font-black text-8xl">10+</span>
            <span className="font-bold text-2xl">years of experience</span>
          </div>
          <Image src={IstaknutaSlika} alt="istaknuta slika" height={672} width={521}></Image>
        </div>
      </div>
    </section>
  );
}