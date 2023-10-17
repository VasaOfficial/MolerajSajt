import Image from "next/image";
import I1 from '@/public/assets/i_icons/i1.svg'
import I2 from '@/public/assets/i_icons/i2.svg'
import I3 from '@/public/assets/i_icons/i3.svg'
import I4 from '@/public/assets/i_icons/i4.svg'
import I6 from '@/public/assets/i_icons/i6.svg'
import I8 from '@/public/assets/i_icons/i8.svg'

export default function Usluge() {
  return (
    <section className="relative bg-blackBg py-24">
      <div className="flex flex-col justify-center items-center max-w-[90%] w-full m-auto gap-20">
        <div className="text-center w-full flex flex-col items-center">
          <span className="text-golden text-lg font-bold tracking-widest font-montserrat mb-2">Dodatne usluge moleraja</span>
          <h2 className="text-white uppercase text-5xl font-black text-center tracking-wider m-0 mb-8 font-oswald">SVE NAŠE USLUGE MOLERAJA I PREUREĐENJA DOMA</h2>
          <p className="text-opacity-80 text-white leading-6 max-w-2xl m-0 text-lg font-montserrat">Naše ekspertize idu dalje od slikanja kuća! Takođe smo majstori usluga preuređenja doma u Beogradu, Obrenovcu i okolini. Od transformacije vaše kuhinje i kupatila u elegantne i funkcionalne prostore do okvira i suvih zidnih projekata, mi smo tu da vas i vaše zidove zaštitimo. Naš raznovrstan spektar usluga osigurava da svaki kutak vašeg doma odražava vaš ukus i način života. Dozvolite da Real Deal Painting bude vaš partner u pretvaranju vaše kuće u dom vaših snova!</p>
        </div>
        <ul className="flex flex-row justify-center items-stretch w-full p-0 m-0 flex-wrap gap-5 font-montserrat">
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Drywall Install & Repair" src={I1} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3 font-oswald">Suvi zidovi</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Iskusite besprekorno postavljanje i popravku suvih zidova, obezbeđujući glatke zidove i besprekorne završne površine za vaš enterijer.</p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Framing" src={I2} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3 font-oswald">Okvirni radovi</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Postignite strukturalnu preciznost uz stručne usluge izrade okvira za zidove, postavljajući čvrstu osnovu koja će trajati.</p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Kitchen Remodel" src={I3} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3 font-oswald">Renoviranje kuhinje</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Otključajte potencijal vaše kuhinje uz usluge renoviranja koje kombinuju stil, funkcionalnost i stručnu veštinu.</p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Bathroom Remodel" src={I4} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3 font-oswald">Renoviranje kupatila</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Dajte svom kupatilu novi izgled uz naše usluge renoviranja kupatila koje spajaju opuštajuće vibracije sa modernim dizajnom.</p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Fence And Deck Staining" src={I6} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3 font-oswald">Ograde i Terase</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Unapredite svoj spoljni prostor uslugama farbanja ograde i terase, obezbeđujući trajnu lepotu i zaštitu.</p>
            </div>
          </li>
          <li className="card border max-w-sm border-white text-white border-opacity-30 cursor-pointer p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-iconBg w-20 h-20 mb-6 m-0 flex justify-center items-center relative">
                <Image alt="Commercial Painting" src={I8} width={40} height={40}></Image>
              </div>
              <h3 className="font-black text-xl text-opacity-80 mb-3 font-oswald">Poslovni prostor</h3>
              <p className="text-opacity-80 text-white text-center leading-6 text-lg">Osvežite prostor vašeg poslovanja uz nase usluge, donoseći profesionalnost kroz besprekorne završne površine i nijanse.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}