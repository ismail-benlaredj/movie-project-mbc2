import Link from "next/link"
import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { fetchApi } from "@/util/FetchApi"
import { IMAGE_URL, SEARCH_MOVIE, MOVIES_FILTER } from "@/constants"
import DropdownWithFetch from "@/components/DropdownWithFetch"
import Dropdown from "@/components/Dropdown"
import SearchInput from "@/components/SearchInput"

const Navbar = () => {
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
        <SearchInput />
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
