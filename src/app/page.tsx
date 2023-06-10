import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={'https://openclipart.org/download/326135/whale1.svg'} alt='Humback whale' width={400} height={100}></Image>
    </main>
  )
}
