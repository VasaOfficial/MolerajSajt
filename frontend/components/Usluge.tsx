import Image from 'next/image';

import I1 from '@/public/assets/i_icons/i1.svg';
import I2 from '@/public/assets/i_icons/i2.svg';
import I3 from '@/public/assets/i_icons/i3.svg';
import I4 from '@/public/assets/i_icons/i4.svg';
import I6 from '@/public/assets/i_icons/i6.svg';
import I8 from '@/public/assets/i_icons/i8.svg';

export default function Usluge() {
  return (
    <section className="relative w-full bg-blackBg py-24">
      <div className="m-auto flex w-full max-w-[90%] flex-col items-center justify-center gap-20">
        <div className="flex w-full flex-col items-center text-center">
          <span className="mb-2 font-montserrat text-lg font-bold tracking-widest text-golden">
            Dodatne usluge moleraja
          </span>
          <h2 className="m-0 mb-8 text-center font-oswald text-5xl font-black uppercase tracking-wider text-white">
            SVE NAŠE USLUGE MOLERAJA I PREUREĐENJA DOMA
          </h2>
          <p className="m-0 max-w-2xl font-montserrat text-lg leading-6 text-white text-opacity-80">
            Naše ekspertize idu dalje od slikanja kuća! Takođe smo majstori
            usluga preuređenja doma u Beogradu, Obrenovcu i okolini. Od
            transformacije vaše kuhinje i kupatila u elegantne i funkcionalne
            prostore do okvira i suvih zidnih projekata, mi smo tu da vas i vaše
            zidove zaštitimo. Naš raznovrstan spektar usluga osigurava da svaki
            kutak vašeg doma odražava vaš ukus i način života. Dozvolite da Real
            Deal Painting bude vaš partner u pretvaranju vaše kuće u dom vaših
            snova!
          </p>
        </div>
        <ul className="m-0 flex w-full flex-row flex-wrap items-stretch justify-center gap-5 p-0 font-montserrat">
          <li className="card max-w-sm border border-white border-opacity-30 p-8 text-white">
            <div className="flex flex-col items-center justify-center">
              <div className="relative m-0 mb-6 flex h-20 w-20 items-center justify-center bg-iconBg">
                <Image
                  alt="Drywall Install & Repair"
                  src={I1}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mb-3 font-oswald text-xl font-black text-opacity-80">
                Suvi zidovi
              </h3>
              <p className="text-center text-lg leading-6 text-white text-opacity-80">
                Iskusite besprekorno postavljanje i popravku suvih zidova,
                obezbeđujući glatke zidove i besprekorne završne površine za vaš
                enterijer.
              </p>
            </div>
          </li>
          <li className="card max-w-sm  border border-white border-opacity-30 p-8 text-white">
            <div className="flex flex-col items-center justify-center">
              <div className="relative m-0 mb-6 flex h-20 w-20 items-center justify-center bg-iconBg">
                <Image alt="Framing" src={I2} width={40} height={40} />
              </div>
              <h3 className="mb-3 font-oswald text-xl font-black text-opacity-80">
                Okvirni radovi
              </h3>
              <p className="text-center text-lg leading-6 text-white text-opacity-80">
                Postignite strukturalnu preciznost uz stručne usluge izrade
                okvira za zidove, postavljajući čvrstu osnovu koja će trajati.
              </p>
            </div>
          </li>
          <li className="card max-w-sm border border-white border-opacity-30 p-8 text-white">
            <div className="flex flex-col items-center justify-center">
              <div className="relative m-0 mb-6 flex h-20 w-20 items-center justify-center bg-iconBg">
                <Image alt="Kitchen Remodel" src={I3} width={40} height={40} />
              </div>
              <h3 className="mb-3 font-oswald text-xl font-black text-opacity-80">
                Renoviranje kuhinje
              </h3>
              <p className="text-center text-lg leading-6 text-white text-opacity-80">
                Otključajte potencijal vaše kuhinje uz usluge renoviranja koje
                kombinuju stil, funkcionalnost i stručnu veštinu.
              </p>
            </div>
          </li>
          <li className="card max-w-sm border border-white border-opacity-30 p-8 text-white">
            <div className="flex flex-col items-center justify-center">
              <div className="relative m-0 mb-6 flex h-20 w-20 items-center justify-center bg-iconBg">
                <Image alt="Bathroom Remodel" src={I4} width={40} height={40} />
              </div>
              <h3 className="mb-3 font-oswald text-xl font-black text-opacity-80">
                Renoviranje kupatila
              </h3>
              <p className="text-center text-lg leading-6 text-white text-opacity-80">
                Dajte svom kupatilu novi izgled uz naše usluge renoviranja
                kupatila koje spajaju opuštajuće vibracije sa modernim dizajnom.
              </p>
            </div>
          </li>
          <li className="card max-w-sm border border-white border-opacity-30 p-8 text-white">
            <div className="flex flex-col items-center justify-center">
              <div className="relative m-0 mb-6 flex h-20 w-20 items-center justify-center bg-iconBg">
                <Image
                  alt="Fence And Deck Staining"
                  src={I6}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mb-3 font-oswald text-xl font-black text-opacity-80">
                Ograde i Terase
              </h3>
              <p className="text-center text-lg leading-6 text-white text-opacity-80">
                Unapredite svoj spoljni prostor uslugama farbanja ograde i
                terase, obezbeđujući trajnu lepotu i zaštitu.
              </p>
            </div>
          </li>
          <li className="card max-w-sm border border-white border-opacity-30 p-8 text-white">
            <div className="flex flex-col items-center justify-center">
              <div className="relative m-0 mb-6 flex h-20 w-20 items-center justify-center bg-iconBg">
                <Image
                  alt="Commercial Painting"
                  src={I8}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mb-3 font-oswald text-xl font-black text-opacity-80">
                Poslovni prostor
              </h3>
              <p className="text-center text-lg leading-6 text-white text-opacity-80">
                Osvežite prostor vašeg poslovanja uz nase usluge, donoseći
                profesionalnost kroz besprekorne završne površine i nijanse.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
