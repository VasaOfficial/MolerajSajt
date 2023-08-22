import GalerijaRadova from "@/components/GalerijaRadova";
import Pocetna from "@/components/Pocetna";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-screen w-screen">
        <Pocetna />  
       <GalerijaRadova/>
       <Video/>
      </main>
    </>
  );
}
