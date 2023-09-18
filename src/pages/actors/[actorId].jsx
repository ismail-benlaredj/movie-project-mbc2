import MainLayout from "@/layouts/mainLayout"
export default function ActorId({actorData,actors}){
    console.log(actors.results)
    let gen="";
    console.log(actorData.gender)
    if (actorData.gender===1 ) gen="Female"
    else if (actorData.gender===2 ) gen="Male"

    return (
        
    <MainLayout>
    <div className="bg-darkblue   w-screen  absolute left-0  top-80">
    <nav className="flex  container pt-10  justify-start " >

        <div className="items-center">      
             <img  className="rounded-lg max-w-sm" src ={"https://image.tmdb.org/t/p/w500/"+actorData.profile_path} alt=""/>   
        </div>
        <div className="flex flex-col px-20">
            <h1 className="text-brightRed p-3  text-3xl">{actorData.name}</h1>
      
            <h3 className="text-white">Gender: {gen}</h3>
            <h3 className="text-white">Born: {actorData.birthday}</h3>
            <h3 className="text-white">Place of birth: {actorData.place_of_birth}</h3>
            <h3 className="text-white">Popularity: {actorData.popularity}</h3>
            
        </div>
    </nav>
    <div  className="container pt-10  ">
        <h2 className="text-brightRed">Biography</h2>
        <p className="text-white">
                {actorData.biography}
        </p>
    </div>
    <div className="container pt-10  ">
    <h2 className="text-brightRed">Related Movies </h2>
    <div  className="flex flex-wrap	">
        <h3>{(actors.id===actorData.id)&& (<h3>actor.id</h3>) } </h3>

         <div className="p-5 flex flex-col hover:grayscale cursor-pointer ">
            <img className=" rounded-lg   "src ="/img/images.jpg" alt=""/> 
            <h4 className="text-white text-center">movie title</h4>
        </div>
    </div>
</div>
</div> 
   </MainLayout>
        
    )
}
export async function getServerSideProps(context)
{
    const {actorId}= context.query
    console.log(actorId);
const url = `https://api.themoviedb.org/3/person/${actorId}?language=en-US`;
const url2 = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjNlNWUzMDA2ZDdhMDZlYWQzNDU5MjkxNTI2YzUyMiIsInN1YiI6IjY1MDQzMzI5NmEyMjI3MDEzNzJlZWIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qPi94OH9K-txlJdxtOrL-s_FMfLaZP-leFYY1_qbw1o'
  }
};
const response=await fetch(url,options)
const response2=await fetch(url2,options)
const data2=await response2.json()
const data=await response.json()
return{
    props:{
        actorData:data,
        actors:data2,
    },
}
}

