import React from "react"

function About() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12">
        <div className="w-full lg:w-2/3 mx-auto">
          <img
            src="../images/banner.jpg"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="mt-6">
            <h1 className="text-3xl font-semibold mb-4">About Us</h1>
            <p className="text-gray-700">
              Re:Movies is a Web Application build out using API from TMDb
              database.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
