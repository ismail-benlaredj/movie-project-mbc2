import { Inter } from "next/font/google"
import MainLayout from "@/layouts/mainLayout"
import ActorId from "@/pages/actors/[actorId]"
import Actors from "@/pages/actors/index"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Actors />
    </>
  )
}
