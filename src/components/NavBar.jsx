import React from "react"
import MovieList from "../components/MovieList"

const NavBar = () => {
  console.log("NavBar")

  return (
    <div className="bg-gray-900 flex items-center justify-between">
      <h1 className="text-slate-100 font-bold tracking-wider">Re:Movies</h1>
      <div
        id="manu_bar"
        className="
            flex
            px-10 
            "
      >
        <div>
          <nav
            className="
                    flex justify-center space-x-4
                    mx-12
                    "
          >
            <a
              href="#"
              className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Movies
            </a>
            <a
              href="#"
              className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Categories
            </a>
            <a
              href="#"
              className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Genres
            </a>
          </nav>
        </div>

        <div>
          <MovieList />
        </div>
        <div className="flex items-center justify-between">
          <input
            className="relative 
                peer z-10 
                bg-transparent
                w-15 h-11
                pl-12 pl-4
                rounded-full
                border focus:w-full focus-border-lime-300
                focus:cursor-text
                text-slate-100
                
                "
            type="search"
            placeholder="Search"
          ></input>
        </div>
        <div className="justify-sp">
          <button
            className="
                py-3 px-3 ms-4
                font-bold
                text-slate-100 
                cursor-pointer 
                bg-transparent 
                border 
                tracking-wider
                rounded-md p-2
                hover:bg-slate-600
                transition-colors duration-300
                "
          >
            Sign up
          </button>
          <button
            className="
                bg-green-700
                font-semibold
                tracking-wider
                text-slate-100
                py-3 px-3 ms-4
                inline-block
                rounded-lg
                hover:bg-green-600
                transition-colors duration-300
                "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
