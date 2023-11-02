import Image from 'next/image';

import neighborhood from '@/public/assets/neighborhood.jpg';
import neighborhood2 from '@/public/assets/neighborhood2.webp';
import s1 from '@/public/assets/s_icons/s1.svg';
import s2 from '@/public/assets/s_icons/s2.svg';
import s3 from '@/public/assets/s_icons/s3.svg';

export default function Iskustvo() {
  return (
    <section className="m-w-[90%] relative z-10 bg-black py-20 text-center">
      <div className="m-auto flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-center text-center">
          <span className="font-montserrat text-lg font-bold tracking-widest text-golden">
            ISKUSTVO
          </span>
          <h2 className="m-0 mb-8 text-center font-oswald text-5xl font-black uppercase tracking-wider text-white">
            Zašto izabrati nas?
          </h2>
          <p className="m-0 max-w-2xl font-montserrat text-lg leading-6 text-white text-opacity-80 max-lg:max-w-[80%] max-lg:text-sm">
            Stojimo iza našeg rada sa garancijom od 100% kvaliteta izvedenih
            radova i ako imate bilo kakve brige ili probleme sa bilo kojim delom
            završenog posla, osiguraćemo da budu rešeni i otklonjeni. Naš cilj
            broj 1 je da svakog klijenta ostavimo zadovoljnim i 100% srećnim sa
            našim radom. Ako tražite izvođača za moleraj, gletovanje, farbanje i
            krečenje koji će posao obaviti kako treba već prvi put, ne tražite
            dalje!
          </p>
        </div>
        <ul className="gap-y-15 m-0 mt-10 flex max-w-full flex-row flex-wrap items-stretch justify-center gap-x-10 p-0 font-oswald text-white max-lg:flex-col max-lg:items-center">
          <li className="w-1/4 max-w-sm max-lg:mt-10 max-lg:w-[90%]">
            <div className="m-auto mb-6 flex h-24 w-24 items-center justify-center bg-white">
              <Image alt="s1" src={s1} width={38} height={38} />
            </div>
            <h3 className="m-0 mb-3 text-xl font-bold">ISKUSTVO KUPCA</h3>
            <p className="m-0 font-montserrat text-base">
              Naš prioritet je da se pobrinemo da imate besprekorno iskustvo od
              početka do kraja i da volite izgled vašeg doma 100%.
            </p>
          </li>
          <li className="w-1/4 max-w-sm max-lg:mt-10 max-lg:w-[90%]">
            <div className="m-auto mb-6 flex h-24 w-24 items-center justify-center bg-white">
              <Image alt="s2" src={s2} width={38} height={38} />
            </div>
            <h3 className="m-0 mb-3 text-xl font-bold">100% ZADOVOLJSTVO</h3>
            <p className="m-0 font-montserrat text-base">
              Garantujemo da ćete biti zadovoljni našim radom i pobrinućemo se
              da svi poslovi budu pažljivo pregledani dva puta nakon završetka.
            </p>
          </li>
          <li className="w-1/4 max-w-sm max-lg:mt-10 max-lg:w-[90%]">
            <div className="m-auto mb-6 flex h-24 w-24 items-center justify-center bg-white">
              <Image alt="s3" src={s3} width={38} height={38} />
            </div>
            <h3 className="m-0 mb-3 text-xl font-bold">FER CENE</h3>
            <p className="m-0 font-montserrat text-base">
              Znamo tačno koliko treba da ponudimo za svaki posao i odbijamo da
              precenjujemo ili povecavamo te troškove, pružajući i dalje najviši
              kvalitet izvedenih radova.
            </p>
          </li>
        </ul>
      </div>
      <div className="neighborhood">
        <Image src={neighborhood} alt="neighborhood" fill />
      </div>
      <div className="neighborhood md:hidden">
        <Image src={neighborhood2} alt="neighborhood" fill />
      </div>
    </section>
  );
}
