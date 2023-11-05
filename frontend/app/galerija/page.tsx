'use client';

/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
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

function InViewAnimation({ item, isOdd }: InViewAnimationProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationStyles = {
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateX(0)'
      : isOdd
      ? 'translateX(100px)'
      : 'translateX(-100px)',
    transition: 'opacity 1s, transform 1.5s',
  };

  return (
    <div ref={ref} style={animationStyles}>
      <div
        className={`flex w-full items-center md:flex-row ${
          isOdd ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="w-full md:w-1/2">
          <Image src={item.imageUrl} alt="Image" height={700} width={1300} />
        </div>
      </div>
    </div>
  );
}

export default function Galerija() {
  return (
    <section className="relative mt-96 flex h-auto w-full items-center bg-stone-950 max-lg:mt-32 max-md:mt-96 sm:mt-0 pt-96 max-sm:pt-5 max-sm:mt-72">
      <div className="mx-auto mb-20 mt-96 flex w-full max-w-[90%] flex-col items-center justify-center gap-16 pt-60 max-xl:pt-10 max-lg:mt-56 max-lg:pt-0 max-md:mt-16">
        {data.map((item, index) => (
          <InViewAnimation key={index} item={item} isOdd={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
