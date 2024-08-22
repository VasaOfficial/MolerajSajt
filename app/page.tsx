import Footer from 'components/Footer';
import Iskustvo from 'components/Iskustvo';
import Istaknuto from 'components/Istaknuto';
import Pocetna from 'components/Pocetna';
import Usluge from 'components/Usluge';

export default function Home() {
  return (
    <main className="mt-10 flex h-full w-full flex-col">
      <Pocetna />
      <Istaknuto />
      <Iskustvo />
      <Usluge />
      <Footer />
    </main>
  );
}
