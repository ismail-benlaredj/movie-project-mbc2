import { Inter } from "next/font/google"
import MainLayout from "@/layouts/mainLayout"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <MainLayout />
    </>
  )
}
