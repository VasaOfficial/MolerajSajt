import Image from 'next/image';

import IstaknutaSlika from '@/public/assets/istaknuto.jpg';

export default function Istaknuto() {
  return (
    <section className="relative h-auto w-full bg-stone-950 py-24">
      <div className="m-auto flex w-full items-center justify-center gap-20 max-lg:flex-col max-lg:gap-10">
        <div className="flex h-auto w-full max-w-[40%] flex-col items-start text-center max-lg:max-w-[90%] max-lg:items-center">
          <span className="text-left font-montserrat text-lg font-bold tracking-widest text-golden">
            Istaknuta usluga
          </span>
          <h2 className="m-0 mb-8 mt-2 text-left font-oswald text-5xl font-black uppercase leading-tight tracking-wider text-white max-lg:text-center">
            IZVOĐAČI RADOVA NA PREUREĐENJU KUHINJE I KUPATILA
          </h2>
          <p className="m-0 max-w-2xl text-left font-montserrat text-lg leading-6 text-white text-opacity-80 max-lg:max-w-[90%] max-lg:text-center max-lg:text-sm">
            Kuhinje su srce svakog doma, i bez obzira da li razmišljate o
            osvežavanju elemenata kao što su potpuna promena, moleraj,
            gletovanje, farbanje i krečenje su ključni koraci u procesu
            preuređenja. Naš tim stručnjaka za moleraj, gletovanje, farbanje i
            krečenje je spreman da dodaju svoju stručnost i obezbede da vaša
            kuhinja zablista u potpuno novom sjaju. Hajde da zajedno pretvorimo
            vaše ideje u stvarnost i osiguramo da vaša kuhinja postane omiljeno
            mesto u vašem domu.
            <br />
            <br />
            Ali zašto se zaustaviti samo kod kuhinje? Dajmo istu pažnju i vašem
            kupatilu. Mi takođe nudimo profesionalne usluge preuređenja kupatila
            u Beogradu, Obrenovcu i okolini. Naši stručnjaci će sarađivati s
            vama kako bismo stvorili mirnu oazu koja zadovoljava vaše potrebe.
          </p>
        </div>
        <div className="relative max-lg:max-w-[90%]">
          <div className="z-2 absolute bottom-[50px] left-[-100px] ml-10 flex flex-col gap-2 bg-darkRed px-7 py-9 text-center text-white max-lg:bottom-[-10%] max-lg:left-[15%] max-lg:p-4">
            <span className="text-8xl font-black max-lg:text-5xl">10+</span>
            <span className="text-2xl font-bold max-lg:text-lg">
              godina iskustva
            </span>
          </div>
          <Image
            src={IstaknutaSlika}
            alt="istaknuta slika"
            height={672}
            width={521}
          />
        </div>
      </div>
    </section>
  );
}
