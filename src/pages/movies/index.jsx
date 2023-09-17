import React from 'react'
import MainLayout from '@/layouts/mainLayout'
import MovieCard from '@/component/movieCard';
import Link from 'next/link';
import { fetcher } from '@/util/api';
export default function Movies({ name, id, allMovies }) {
    console.log('moviesprom :', allMovies)
    // console.log("geea3 movies :", allMovies)
    console.log("id :", id)
    return (
        <MainLayout>
            <h2>{name}MOVIES</h2>
            <hr className='my-4'></hr>
            <div className="flex flex-row flex-wrap gap-6 justify-around">

                {allMovies.results.map((movie, index) => (
                    <Link key={index} href={`/geners/${movie.genre_ids[0]}`}>
                        <MovieCard key={index} {...movie} />
                    </Link>
                ))}
            </div>
        </MainLayout >

    )
}
export async function getStaticProps() {

    // const moviesList = [{ nowPlaying: 'movie/now_playing?language=en-US&page=1' },
    // { popular: 'movie/popular?language=en-US&page=1' },
    // { topRated: 'movie/top_rated?language=en-US&page=1' },
    // { upComing: 'movie/upcoming?language=en-US&page=1' },
    // { allMovies: 'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' }];
    // const moviePromises = moviesList.map(async (movieObject) => {
    //     const [key, value] = Object.entries(movieObject)[0];
    //     const data = await fetcher(value);
    //     return {
    //         [key]: data,
    //     };
    // });
    // const movieData = await Promise.all(moviePromises);

    // // Create a props object to return
    // const props = {
    //     Movies: movieData,
    // };
    // return { props };
    const data = await fetcher(`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);

    return {
        props: {
            allMovies: data,
        },
    }

}
