//import MainLayout from "@/layouts/mainLayout"
export default function MoviePage({ movieData }) {
  return (
    <div>
      <h1>Hello world</h1>
      <h1>{movieData.title}</h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query

  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjNlNWUzMDA2ZDdhMDZlYWQzNDU5MjkxNTI2YzUyMiIsInN1YiI6IjY1MDQzMzI5NmEyMjI3MDEzNzJlZWIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qPi94OH9K-txlJdxtOrL-s_FMfLaZP-leFYY1_qbw1o",
    },
  }
  const response = await fetch(url, options)
  const data = await response.json()

  return {
    props: {
      movieData: data,
    },
  }
}
