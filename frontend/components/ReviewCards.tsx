import Image from "next/image";
import quote from 'public/assets/quote.svg'

type ReviewCardsProps = {
  name: string;
  feedback: string;
}

export default function ReviewCards({ name, feedback }: ReviewCardsProps) {
  return (
    <li className={`border-[darkRed] border flex flex-col items-start bg-[#0a0a0a] m-0 py-24 px-24`}>
      <Image src={quote} alt="quote" quality={100} width={40} height={38} className="h-auto mb-8" />
      <p className="text-gray-300 my-10 max-w-sm text-xl">{feedback}</p>
      <span className="text-white text-2xl">- {name}</span>
    </li>
  );
}
