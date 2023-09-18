import React from 'react'
import MainLayout from '@/layouts/mainLayout'
import MovieCard from '@/component/movieCard';
import Link from 'next/link';
import { fetcher } from '@/util/api';
export default function GenresTypes({ genres }) {
    console.log('moviesprom :', genres)
    // console.log("geea3 movies :", allMovies)
    return (
        <MainLayout>
            <hr className='my-4'></hr>
            <div className="flex flex-row flex-wrap gap-3 justify-around">

                {genres.genres.map((genre, index) => (
                    <Link key={index} href={`/geners/${genre.id}`}>
                        <h2>{genre.id} and {genre.name}</h2>
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
    const data = await fetcher(`genre/movie/list?language=en`);

    return {
        props: {
            genres: data,
        },
    }

}
