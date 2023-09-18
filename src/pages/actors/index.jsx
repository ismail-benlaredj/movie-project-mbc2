import MainLayout from "@/layouts/mainLayout"
import CardA from "@/component/cardA.jsx"
import { Grid } from "@mui/material"
import Link from "next/link"
export default function Actors({infoA}){
    return (
<MainLayout>

<Grid container spacing={3}>
    {infoA.results.map(actor=>{
        return (  
        <Grid item xs={3}>
            <Link href={`/actors/${actor.id}`}>
                <CardA  {...actor}/>
                </Link>
          </Grid>)
    })}

  </Grid>

 </MainLayout>        
        
        )}

export async function getStaticProps(){
            
    const url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjNlNWUzMDA2ZDdhMDZlYWQzNDU5MjkxNTI2YzUyMiIsInN1YiI6IjY1MDQzMzI5NmEyMjI3MDEzNzJlZWIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qPi94OH9K-txlJdxtOrL-s_FMfLaZP-leFYY1_qbw1o'
      }
    };
            

            const response =await fetch(url,options)
            const data = await response.json()
            return {
                props:{
                    infoA :data,
                }, 
            }
            }

