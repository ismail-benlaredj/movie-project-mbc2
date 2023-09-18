import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] })

export default function Homepage() {
  return (
    <div>
      
    </div>
import MainLayout from "@/layouts/mainLayout"
import ActorId from "@/pages/actors/[actorId]"
import Actors from "@/pages/actors/index"


export default function Home({ movieList, movieInfo }) {
  console.log(movieInfo)
  return (
    <>
      <Actors />
    </>

  )
}

// Fetching to Populer Movies list
export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzY5NGU0YWVhMGQ0MGZmOWNmYjQ5NzJmOWQzYmJmYyIsInN1YiI6IjY1MDM1ZmM3NjNhYWQyMDBlMTJjYTRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bB3j5OZBoJsZvKOJws5XQZT9zZvFvc1jpw8tnmmUwkQ",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()

  return {
    props: {
      movieList: data,
    },
  }

   

}

// export async function getStaticProps2() {
//   const url = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';
//   const options = {
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzY5NGU0YWVhMGQ0MGZmOWNmYjQ5NzJmOWQzYmJmYyIsInN1YiI6IjY1MDM1ZmM3NjNhYWQyMDBlMTJjYTRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bB3j5OZBoJsZvKOJws5XQZT9zZvFvc1jpw8tnmmUwkQ'
//     }
//   };

//   const response = await fetch(url, options);
//   const data = await response.json()

//   return {
//     props: {
//       movieInfo: data,
//     }
//   }

// }

// Movie Details

// export async function getStaticProps2() {
// const url = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';
// const options = {
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzY5NGU0YWVhMGQ0MGZmOWNmYjQ5NzJmOWQzYmJmYyIsInN1YiI6IjY1MDM1ZmM3NjNhYWQyMDBlMTJjYTRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bB3j5OZBoJsZvKOJws5XQZT9zZvFvc1jpw8tnmmUwkQ'
//   }
// };

// const response = await fetch(url, options);
// const data = await response.json()

// return {
//   props: {
//     movieInfo: data,
//   }
// }

// }
