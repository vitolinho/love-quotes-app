export default function copyToClipboard(str: string) {
  return navigator.clipboard.writeText(str)
}
