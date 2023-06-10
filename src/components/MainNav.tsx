import Link from 'next/link'
import Image from 'next/image'

export default function MainNav() {
    return (
        <nav className="main-nav">
          <span>🐳</span>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Documentation</Link>
          <Link href={'/'}>Latest News</Link>
          <Link href={'/'}>Find in map</Link>
          <span>🐋</span>
        </nav>
    )
}