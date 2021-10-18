import type { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Movies.module.css'

type Filme = {
	id: number
	title: string;
	poster_path: string;
	backdrop_path: string;
	vote_average: number;
	overview: string;
}

type FilmeProps = {
	filme: Filme
}


export default function MovieItem ({filme}: FilmeProps){
	
	return (
	 
		<div>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Filmes: 
				</h1>
				<Link href={"/busca"}>Ir para pagina de busca</Link>
                <h1>Title: {filme.title}</h1>
				<p>Nota: {filme.vote_average}</p>
				<p>{filme.overview}</p>
				<br />
				<img 
					src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} 
					width="800"
				/>
				

			</main>

		</div>
	)
}

export const getStaticPaths: GetStaticPaths = () =>  {
    return {
        paths: [
            {params: { id: "597" }}
        ],
        fallback: 'blocking',
    }
}


//Contexto node (Server-Side)
export const getStaticProps: GetStaticProps = async ({params}) => {
    const { id } :any  = params
    console.log('id static', id)

		const response = await fetch(`http://localhost:3000/api/movie/${id}`)
		const data = await response.json()

		console.log('data static', data)

	return{
		props:{
				filme: data.info
		},
        revalidate: 10
	}
}
