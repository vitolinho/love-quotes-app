import { useQuery } from "react-query"
import { getLoveQuote } from "./services/loveQuotes"
import copyToClipboard from "./utils/copyToClipboard"

function App() {
  const { data, refetch } = useQuery({
    queryKey: ["loveQuote"],
    queryFn: () => getLoveQuote()
  })
  const handleClick = () => {
    refetch()
    if (data) {
      copyToClipboard(String(data.data))
    } else {
      console.error('Problèmes de compétences')
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red">
        Hello world!
      </h1>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App
