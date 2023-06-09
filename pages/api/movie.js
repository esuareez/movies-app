// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../lib/dbConnect"
import Movie from "../../models/Movie"

export default async function handler(req, res) {

  await dbConnect()

  //  POST /api/movie
  const {method} = req
  switch (method) {
    case 'POST':
      try {
        
        const movie = new Movie(req.body)
        await movie.save() // Lo guarda en la BD
        res.status(200).json({success: true, movie})

      } catch (error) {
        res.status(400).json({success: false, error})
      }
    default:
      res.status(500).json({success: false, error: 'Falla del servidor'})
  }
}
