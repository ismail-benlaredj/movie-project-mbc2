import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"

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
        <Navbar />
      </section>
      <main className="py-10">{children}</main>
      <Footer />
    </div>
  )
}
