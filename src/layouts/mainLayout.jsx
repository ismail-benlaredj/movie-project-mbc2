import Image from "next/image"
import Link from "next/link"
import { AiOutlineSearch } from "react-icons/ai"

export default function MainLayout({ children }) {
  return (
    <div className="container">
      <section className="box-border h-[80vh]">
        <div
          className="-z-10 w-screen h-[80vh]  absolute left-0 bg-[url('/img/movie.jpg')] bg-[center_center] 
                bg-[length:120%_140%] bg-no-repeat"
        >
          <div className="relative w-full h-full ">
            <div className="w-full h-32  absolute top-0  bg-gradient-to-b from-black to-transparent"></div>
            <div className="w-full h-32  absolute bottom-0  bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
        <nav className="flex flex-row py-4 items-center justify-between">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="Re:watch logo"
              width={140}
              height={100}
            />
          </Link>
          <div className="">
            <ul>
              <li className="inline-block px-4 py-2">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="inline-block px-4 py-2">
                <Link href={"/about"}>Discover</Link>
              </li>
              <li className="inline-block px-4 py-2">
                <Link href={"/contact"}>Movie releases</Link>
              </li>
              <li className="inline-block px-4 py-2  ">
                <Link href={"/contact"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row  w-56 justify-between">
            <AiOutlineSearch className="text-2xl" />
            <Link
              href={"#"}
              className="border border-white rounded-md px-3 py-1 flex items-center"
            >
              Sign up
            </Link>
            <Link
              href={"#"}
              className="bg-green-600 rounded-md px-3 flex py-1 items-center"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </section>
      <main className="py-10">{children}</main>
      <footer>
        <div className="flex flex-row justify-between mt-10">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Re:watch</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Re:watch</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Re:watch</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
