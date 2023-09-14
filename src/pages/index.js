import Image from "next/image"
import { Inter } from "next/font/google"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return <h1 className="text-xl text-blue-700 font-semibold">Hello!</h1>
}
