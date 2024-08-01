import ky from 'ky'
import { LoveQuote } from '../types/loveQuotes'

export function getLoveQuote(): Promise<LoveQuote> {
  return ky.get('https://love-quotes.vercel.app/').json()
}
