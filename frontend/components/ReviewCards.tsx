import Image from 'next/image';
import quote from 'public/assets/quote.svg';

type ReviewCardsProps = {
  name: string;
  feedback: string;
};

export default function ReviewCards({ name, feedback }: ReviewCardsProps) {
  return (
    <div className="m-0 flex h-96 w-96 flex-col items-center justify-center border border-[darkRed] bg-[#0a0a0a] px-5 max-xl:w-72 max-lg:w-72">
      <Image
        src={quote}
        alt="quote"
        quality={100}
        width={40}
        height={38}
        className="mb-3 h-auto "
      />
      <p className="my-5 max-w-sm text-center text-xl text-gray-300">
        {feedback}
      </p>
      <span className="text-2xl text-white">- {name}</span>
    </div>
  );
}
