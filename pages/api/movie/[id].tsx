/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next"
import {apiBase, apiKey} from  '../../../lib/tmdb'

export default async( 
    req: NextApiRequest, 
    res: NextApiResponse
    ) => {

    // console.log('req.query = ',req.query.id)

    const result = await fetch(`
      ${apiBase}/movie/${req.query.id}?api_key=${apiKey}&language=pt-BR
    `)
    
    const json = await result.json()
    // console.log('json api', json)

    res.status(200).json({
        info: json
    })
        
}
    