import { useQuery } from "react-query"
import { getLoveQuote } from "./services/loveQuotes"
import copyToClipboard from "./utils/copyToClipboard"
import { FaHeart } from "react-icons/fa6"
import { useToast } from "@/components/ui/use-toast"

function App() {
  const { data, refetch } = useQuery({
    queryKey: ["loveQuote"],
    queryFn: () => getLoveQuote()
  })
  const handleClick = () => {
    refetch()
    if (data) {
      copyToClipboard(String(data.data))
      toast({
        title: String(data.data),
        description: "Le mot d'amour a été copié dans votre presse-papier.",
      })
    } else {
      toast({
        variant: "destructive",
        title: "Problèmes de compétences",
      })
    }
  }
  const { toast } = useToast()

  return (
    <>
      <div className="w-full h-screen px-5 flex justify-center items-center flex-col bg-[#FBFBFB] gap-[3.75rem]">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-[#390a0a] text-center">
            Dites à votre moitié(e) combien vous l'aimez
          </h1>
          <p className="text-center text-[#390a0a]">Ces mots doux rappellent à votre moitié combien elle compte pour vous et apportent joie et réconfort.</p>
        </div>
        <button onClick={handleClick} className="relative">
          <FaHeart className="absolute inset-0 w-[12.5rem] h-[12.5rem] text-red-200 blur-lg" />
          <FaHeart className="relative w-[12.5rem] h-[12.5rem] text-red-500 active:scale-75 transition-transform" />
        </button>
      </div>
    </>
  )
}

export default App
