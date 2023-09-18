import Image from "next/image"
import { Inter } from "next/font/google"
import Head from "next/head"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Homepage() {
  return (
    <div>
      <Link href="/movies/569094">
        Movies
      </Link>
    </div>
  )
}
