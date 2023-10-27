'use client'

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface DataItem {
    imageUrl: string;
  }
  
  interface InViewAnimationProps {
    item: DataItem;
    isOdd: boolean;
  }
  

const data = [
  {
    imageUrl: '/assets/galerija/dnevna_soba1.jpeg',
  },
  {
    imageUrl: '/assets/galerija/dnevna_soba2.jpeg',
  },
  {
    imageUrl: '/assets/galerija/spavaca_soba.jpeg',
  },
];

export default function Galerija() {
  return (
    <section className="relative bg-stone-950 h-auto w-full flex items-center mt-96">
      <div className="flex flex-col items-center justify-center gap-16 max-w-[90%] w-full mx-auto mb-20 mt-96 pt-60 max-xl:pt-10 max-lg:pt-0 max-lg:mt-56 max-md:mt-16">
        {data.map((item, index) => (
          <InViewAnimation key={index} item={item} isOdd={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function InViewAnimation({ item, isOdd }: InViewAnimationProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationStyles = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : isOdd ? 'translateX(100px)' : 'translateX(-100px)',
    transition: 'opacity 1s, transform 1.5s',
  };

  return (
    <div ref={ref} style={animationStyles}>
      <div
        className={`flex items-center md:flex-row w-full ${isOdd ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="w-full md:w-1/2">
          <Image
            src={item.imageUrl}
            alt={`Image`}
            height={700}
            width={1300}
          />
        </div>
      </div>
    </div>
  );
}