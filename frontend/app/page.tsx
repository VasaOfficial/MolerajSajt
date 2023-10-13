import Footer from "components/Footer";
import GalerijaRadova from "components/GalerijaRadova";
import PageIllustration from "components/PageIllustration";
import Pocetna from "components/Pocetna";
import Recenzije from "components/Recenzije";
import Video from "components/Video";

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-screen w-screen">
        <PageIllustration/>
       <Pocetna />  
       <GalerijaRadova/>
       <Video/>
       <Recenzije />
       <div className="bg-darkRed w-full py-16"></div>
       <Footer/>
      </main>
    </>
  );
}