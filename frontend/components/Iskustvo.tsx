import Image from "next/image";
import neighborhood from '@/public/assets/neighborhood.jpg'
import s1 from '@/public/assets/s_icons/s1.svg'
import s2 from '@/public/assets/s_icons/s2.svg'
import s3 from '@/public/assets/s_icons/s3.svg'

export default function Iskustvo() {
  return (
    <section className="relative bg-black py-20 text-center z-10 m-w-[90%]">
      <div className="w-full m-auto flex flex-col items-center gap-16">
        <div className="text-center w-full flex flex-col items-center">
          <span className="text-golden text-lg font-bold tracking-widest font-montserrat">ISKUSTVO</span>
          <h2 className="text-white uppercase text-5xl font-black text-center tracking-wider m-0 mb-8 font-oswald">Zasto Izabrati nas?</h2>
          <p className="text-opacity-80 text-white leading-6 max-w-2xl m-0 text-lg font-montserrat max-lg:text-sm">Stojimo iza našeg rada sa garancijom od 100% kvaliteta izvedenih radova i ako imate bilo kakve brige ili probleme sa bilo kojim delom završenog posla, osiguraćemo da budu rešeni i otklonjeni. Naš cilj broj 1 je da svakog klijenta ostavimo zadovoljnim i 100% srećnim sa našim radom. Ako tražite izvođača za moleraj, gletovanje, farbanje i krečenje koji će posao obaviti kako treba već prvi put, ne tražite dalje!</p>
        </div>
        <ul className="flex flex-row justify-center flex-wrap items-stretch m-0 p-0 text-white max-w-full gap-x-10 gap-y-15 font-oswald max-lg:flex-col max-lg:items-center">
          <li className="w-1/4 max-w-sm">
            <div className="w-24 h-24 m-auto mb-6 bg-white flex items-center justify-center">
              <Image alt="s1" src={s1} width={38} height={38}></Image>
            </div>
            <h3 className="text-xl font-bold m-0 mb-3">ISKUSTVO KUPCA</h3>
            <p className="text-base m-0 font-montserrat">Naš prioritet je da se pobrinemo da imate besprekorno iskustvo od početka do kraja i da volite izgled vašeg doma 100%.</p>
          </li>
          <li className="w-1/4 max-w-sm">
            <div className="w-24 h-24 m-auto mb-6 bg-white flex items-center justify-center">
              <Image alt="s2" src={s2} width={38} height={38}></Image>
            </div>
            <h3 className="text-xl font-bold m-0 mb-3">100% ZADOVOLJSTVO</h3>
            <p className="text-base m-0 font-montserrat">Garantujemo da ćete biti zadovoljni našim radom i pobrinućemo se da svi poslovi budu pažljivo pregledani dva puta nakon završetka.</p>
          </li>
          <li className="w-1/4 max-w-sm">
            <div className="w-24 h-24 m-auto mb-6 bg-white flex items-center justify-center">
              <Image alt="s3" src={s3} width={38} height={38}></Image>
            </div>
            <h3 className="text-xl font-bold m-0 mb-3">FER CENE</h3>
            <p className="text-base m-0 font-montserrat">Znamo tačno koliko treba da ponudimo za svaki posao i odbijamo da precenjujemo ili povecavamo te troškove, pružajući i dalje najviši kvalitet izvedenih radova.</p>
          </li>
        </ul>
      </div>
      <div className="neighborhood">
        <Image src={neighborhood} alt="neighborhood" fill={true}/>
      </div>
    </section>
  );
}