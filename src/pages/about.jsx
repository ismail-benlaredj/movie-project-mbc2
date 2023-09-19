import React from "react"
import Footer from "@/components/Footer"

function About() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-12">
          <div className="w-full lg:w-2/3 mx-auto">
            <img
              src="./images/banner.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-6">
              <h1 className="text-3xl font-semibold mb-4">About Us</h1>
              <p className="text-gray-700">
                Re:Watched is a Web Application build out using API from TMDb
                database, witch you can search, browes movie information and
                actor as well, know the new released movies, and how much is
                Popular. You are very walcome to try it.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-stretch justify-center py-2  text-gray-900 mb-2 font-semibold">
          <p className="ms-3 mx-2">Created by</p>
          <a
            href="https://github.com/ismail-benlaredj"
            className="ms-3 mx-2 text-red-600 font-bold tracking-wider hover:underline"
          >
            Ismail
            <img href="./imges/git.png"></img>
          </a>
          <a
            href="https://github.com/DigitalDeveloperAM"
            className="ms-3 mx-2 text-red-600 font-bold tracking-wider hover:underline"
          >
            Achraf
            <img href="./imges/git.png"></img>
          </a>
          <a
            href="https://github.com/oualidelh"
            className="ms-3 mx-2 text-red-600 font-bold tracking-wider hover:underline"
          >
            Oualid
            <img href="./imges/git.png"></img>
          </a>
          <a
            href="https://github.com/dalilia"
            className="ms-3 mx-2 text-red-600 font-bold tracking-wider hover:underline"
          >
            Dalila
            <img href="./imges/git.png"></img>
          </a>
          <a
            href="https://github.com/samiraTbl"
            className="ms-3 mx-2 text-red-600 font-bold tracking-wider hover:underline"
          >
            Samira
            <img href="./imges/git.png"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
