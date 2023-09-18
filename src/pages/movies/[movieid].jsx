import React from 'react'
import MovieCard from '@/component/movieCard';
import { fetcher } from '@/util/api';
import MainLayout from '@/layouts/mainLayout';

export default function MoviePage({ singlemovie }) {
    console.log("moviedata single movies", singlemovie)
    return (
        <MainLayout>
            {/* <h2>{name}MOVIES</h2>
            <hr className='my-4'></hr> */}
            <div className="flex flex-row flex-wrap gap-6 justify-around">
                <MovieCard {...singlemovie} />
            </div>
        </MainLayout>
    )
}
export async function getServerSideProps(context) {
    const { movieid } = context.query
    const data = await fetcher(`movie/${movieid}?language=en-US`);

    return {
        props: {
            singlemovie: data,
        },
    }

}
