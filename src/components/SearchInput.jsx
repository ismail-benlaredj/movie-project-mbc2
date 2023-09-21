import { IMAGE_URL, SEARCH_MOVIE } from "@/constants"
import useOutside from "@/hooks/useOutside"
import { fetchApi } from "@/util/FetchApi"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"

const SearchInput = () => {
  const [searchList, setSearchList] = useState([])
  const [search, setSearch] = useState("")
  const [open, setOpen, wrapperRef] = useOutside()

  const handleSeacrh = async (e) => {
    if (e.target.value == "") {
      setSearchList([])
      setSearch("")
      setOpen(false)
      return
    }
    setSearch(e.target.value)
    const data = await fetchApi(SEARCH_MOVIE + search)
    setSearchList(data.results.slice(0, 5))
    setOpen(true)
  }
  return (
    <div className="relative flex flex-row gap-1 items-center bg-[#000000c2] rounded-lg">
      <input
        type="text"
        className="w-44 box-border px-4 py-[3px] rounded-lg bg-[#000000c2] "
        placeholder="Search..."
        value={search}
        onChange={(e) => handleSeacrh(e)}
        onFocus={() => setOpen(true)}
      />
      <AiOutlineSearch className="text-2xl cursor-pointer" />
      <div
        className={`absolute top-full w-96 right-0  bg-[#000000e3] rounded-lg ${
          open ? "block" : "hidden"
        }`}
        ref={wrapperRef}
      >
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
  )
}
export default SearchInput
