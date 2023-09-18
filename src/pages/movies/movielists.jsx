import React from 'react'
import MainLayout from '@/layouts/mainLayout'
import MovieCard from '@/component/movieCard';
import Link from 'next/link';
import { fetcher } from '@/util/api';
export default function MoviesLists() {
    const moviesList = ['now_playing', 'popular', 'top_rated', 'upcoming'];
    return (
        <MainLayout>
            <hr className='my-4'></hr>
            <div className="flex flex-row flex-wrap gap-3 justify-around">

                {moviesList.map((genre, index) => (
                    <Link key={index} href={`/geners/${genre}`}>
                        <h2>{genre}</h2>
                    </Link>
                ))}
            </div>
        </MainLayout >

    )
}