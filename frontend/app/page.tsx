import Footer from "components/Footer";
import Pocetna from "components/Pocetna";
import Recenzije from "components/Recenzije";
import Istaknuto from "components/Istaknuto";
import Usluge from "components/Usluge";
import Iskustvo from "components/Iskustvo";

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-full w-full mt-10">
        <Pocetna />  
        <Istaknuto />
        <Iskustvo />
        <Usluge />
        <Recenzije />
        <Footer/>
      </main>
    </>
  );
}