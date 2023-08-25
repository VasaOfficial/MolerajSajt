import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Rating } from '@/components/ui/Rating'

export default function ReviewFrom() {
    return (
        <div className="p-16 font-semibold flex flex-col justify-center items-center gap-10 bg-slate-200 rounded-md">
          <h1 className="text-2xl">Ostavite utisak</h1>
          <Input className="h-12" placeholder="Upisite vase ime..." />
          <Textarea className="h-32 w-64"/>
          <Rating />
          <button type='submit' className="rounded bg-blue-700 py-4 px-8 text-xl text-white">Posalji</button>
        </div>
    );
  }