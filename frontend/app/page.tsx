import Footer from "components/Footer";
import GalerijaRadova from "components/GalerijaRadova";
import Pocetna from "components/Pocetna";
import Recenzije from "components/Recenzije";
import Video from "components/Video";
import Istaknuto from "components/Istaknuto";
import Usluge from "components/Usluge";

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-screen w-screen">
       <Pocetna />  
       <GalerijaRadova/>
       <Video/>
       <Usluge />
       <Istaknuto />
       <Recenzije />
       <div className="bg-darkRed w-full py-8"></div>
       <Footer/>
      </main>
    </>
  );
}