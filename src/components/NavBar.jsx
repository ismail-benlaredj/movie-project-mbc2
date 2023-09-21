import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { fetchApi } from "@/util/FetchApi"
import { IMAGE_URL, SEARCH_MOVIE, MOVIES_FILTER } from "@/constants"
import DropdownWithFetch from "@/components/DropdownWithFetch"
import Dropdown from "@/components/Dropdown"

const Navbar = () => {
  const [searchList, setSearchList] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const handleSeacrh = async (e) => {
    if (e.target.value == "") {
      setSearchList([])
      setSearchInput("")
      return
    }
    setSearchInput(e.target.value)
    const data = await fetchApi(SEARCH_MOVIE + searchInput)
    console.log(data)
    setSearchList(data.results.slice(0, 5))
  }
  return (
    <nav className="flex flex-row py-4 items-center justify-between">
      <Link href={"/"}>
        <img src="/logo.svg" alt="Re:watch logo" width={140} height={100} />
      </Link>
      <div className="">
        <ul>
          <li className="inline-block px-4 py-2">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="inline-block px-4 py-2">
            <DropdownWithFetch />
          </li>
          <li className="inline-block px-4 py-2">
            <Dropdown genresList={MOVIES_FILTER} lable="Movies Filter" />
          </li>
          <li className="inline-block px-4 py-2">
            {/* <Link href={"/contact"}>About</Link> */}
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row  w-fit items-center gap-4">
        <div className="relative flex flex-row gap-1 items-center bg-[#000000c2] rounded-lg">
          <input
            type="text"
            className="w-44 box-border px-4 py-[3px] rounded-lg bg-[#000000c2] "
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => handleSeacrh(e)}
          />
          <AiOutlineSearch className="text-2xl cursor-pointer" />
          <div className="absolute top-full w-96 right-0  bg-[#000000e3] rounded-lg">
            <div className="flex flex-col gap-2">
              {searchList &&
                searchList.map((movie) => (
                  <Link
                    href={`/movie/${movie.id}`}
                    key={movie.id}
                    className="flex flex-row justify-between items-center p-3  gap-2 hover:bg-black rounded-lg"
                  >
                    <div className="flex flex-row gap-4">
                      <img
                        src={IMAGE_URL + movie.backdrop_path}
                        alt={movie.title}
                        width={500}
                        height={500}
                        className="w-16 rounded-lg"
                      />
                      <p className="text-lg font-semibold">{movie.title}</p>
                    </div>
                    <p className="text-lg font-black text-yellow-500">
                      {movie.vote_average && movie.vote_average.toFixed(1)}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3">
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
      </div>
    </nav>
  )
}

export default Navbar
