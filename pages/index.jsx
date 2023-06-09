import Head from 'next/head'
import dbConnect from '../lib/dbConnect.js'
import Movie from '../models/Movie.js'

export default function Home({movies}) {
  
  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Movies + MongoDB" />
        </Head>

      <main className='container mx-auto'>
        <h1>Movies</h1>

        <div>
          <h2>Movie List</h2>
          {
            movies.map((movie) =>{
              return (
                <div key={movie._id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.plot}</p>
                </div>
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  try {

    await dbConnect()
    
    const res = await Movie.find({})
    const movies = res.map((doc) => {
      const movie = doc.toObject()
      // De esta manera convertimos el ID de Mongo a String y podemos pasar los datos.
      movie._id = movie._id.toString()
      return movie
    })
    return { props: { movies } }

  } catch (error) {
    console.log(error)
  }
}
