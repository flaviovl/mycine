/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next"
import {apiBase, apiKey} from  '../../lib/tmdb'

// type Data = {
//   name: string
// }
// export default  (req, res) => {

export default async( 
    req: NextApiRequest, 
    res: NextApiResponse
    ) => {

    const result = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}&language=pt-BR`)
    
    const json = await result.json()

    res.status(200).json({
        list: json.results
    })
        
}
    