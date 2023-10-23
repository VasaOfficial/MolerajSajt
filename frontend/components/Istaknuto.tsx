import Image from "next/image";
import IstaknutaSlika from '@/public/assets/istaknuto.jpg'
export default function Istaknuto() {

  return (
    <section className="relative bg-stone-950 py-24 h-auto w-full">
      <div className="flex justify-center items-center w-full m-auto gap-20 max-lg:flex-col max-lg:gap-10">
        <div className="text-center w-full flex flex-col items-start max-w-[40%] h-auto max-lg:max-w-[90%] max-lg:items-center">
          <span className="text-golden text-lg font-bold tracking-widest text-left font-montserrat">Istaknuta usluga</span>
          <h2 className="text-white uppercase text-5xl font-black text-left tracking-wider m-0 mb-8 font-oswald leading-tight mt-2 max-lg:text-center">IZVOĐAČI RADOVA NA PREUREĐENJU KUHINJE I KUPATILA</h2>
          <p className="text-left text-opacity-80 text-white leading-6 max-w-2xl m-0 text-lg font-montserrat max-lg:text-sm max-lg:max-w-[90%] max-lg:text-center">Kuhinje su srce svakog doma, i bez obzira da li razmišljate o osvežavanju elemenata kao što su potpuna promena, moleraj, gletovanje, farbanje i krečenje su ključni koraci u procesu preuređenja. Naš tim stručnjaka za moleraj, gletovanje, farbanje i krečenje je spreman da dodaju svoju stručnost i obezbede da vaša kuhinja zablista u potpuno novom sjaju. Hajde da zajedno pretvorimo vaše ideje u stvarnost i osiguramo da vaša kuhinja postane omiljeno mesto u vašem domu.
          <br />
          <br />
          Ali zašto se zaustaviti samo kod kuhinje? Dajmo istu pažnju i vašem kupatilu. Mi takođe nudimo profesionalne usluge preuređenja kupatila u Beogradu, Obrenovcu i okolini. Naši stručnjaci će sarađivati s vama kako bismo stvorili mirnu oazu koja zadovoljava vaše potrebe.
          </p>
        </div>
        <div className="relative max-lg:max-w-[90%]">
          <div className="z-2 ml-10 absolute bottom-[50px] left-[-100px] px-7 py-9 bg-darkRed flex flex-col text-center gap-2 text-white max-lg:left-[15%] max-lg:bottom-[-10%] max-lg:py-4 max-lg:px-4">
            <span className="font-black text-8xl max-lg:text-5xl">10+</span>
            <span className="font-bold text-2xl max-lg:text-lg">godina iskustva</span>
          </div>
          <Image src={IstaknutaSlika} alt="istaknuta slika" height={672} width={521} />
        </div>
      </div>
    </section>
  );
}