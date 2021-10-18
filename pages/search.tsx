import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Movies.module.css'
import { useState } from 'react'
import { json } from 'stream/consumers'
import { title } from 'process'
import { strictEqual } from 'assert'

type Filme = {
	id: number
	title: string;
	poster_path: string;
	vote_averange: number;
	overview: string;
}

type FilmeProps = {
	filmes: Filme[]


}

export default function Busca (){

    const [searchText, setSearchText] = useState('')
    const [movieList, setMovieList] = useState([])

    
    const handleSearch = async () => {
        if(searchText !== ''){
            const res = await fetch(`http://localhost:3000/api/search?q=${searchText}`)
            const data = await res.json()
            setMovieList(data.list)
            // console.log('data.list search', data.list)
        }
    }
    // console.log('movelist', movieList)

	
	return (
	 
		<div>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Busca
				</h1>

                <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} />
                <button onClick={handleSearch}>buscar</button>

                <hr />

                <ul>
                    {movieList.map(item => (
                    <li key={item.id}>
							<a href={`/movie/${item.id}`}>
								<img 
									src={`https://image.tmdb.org/t/p/original${item.poster_path}`} 
									width="150"
									/>
								<br />
								{item.title}
							</a>

                    </li>

                    ))}
                </ul>


			</main>
		</div>
	)
}



