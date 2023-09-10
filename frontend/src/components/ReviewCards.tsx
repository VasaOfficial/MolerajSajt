import Image from "next/image";
import apostrof from 'public/assets/apostrof.png'
import star from 'public/assets/star.png'

type ReviewCardsProps = {
  name: string;
  rating: number;
  feedback: string;
}

export default function ReviewCards({ name, rating, feedback }: ReviewCardsProps) {
  return (
    <div className={`flex-col bg-slate-200 p-16 mx-16 text-2xl font-semibold rounded-md flex text-center`}>
      <div className="flex flex-col items-start">
        <Image src={apostrof} alt="apostrof" quality={100} width={100} height={100} className="mb-10" />
        <p>{feedback}</p> {/* Display the review feedback */}
      </div>
      <div className="flex items-center justify-between mt-16">
        <p>{name}</p> {/* Display the name of the reviewer */}
        <div className="p-4 bg-blue-800 rounded-md text-white flex gap-4">
          <p>{rating}</p> {/* Display the rating */}
          <Image src={star} alt="star" width={30} height={30} />
        </div>
      </div>
    </div>
  );
}
