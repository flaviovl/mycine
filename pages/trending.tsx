import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Movies.module.css'

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

// export default function Repositories({ repos }: RepositoriesProps){

export default function Movies ({ filmes }: FilmeProps){
	
	return (
	 
		<div>
			<Head>
				<title>My Cine</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Filmes em destaque
				</h1>
				<Link href={"/busca"}>Ir para pagina de busca</Link>


				<ul>
					{filmes.map(filme => (
						<li key={filme.id}>
							<a href={`/movie/${filme.id}`}>
								<img 
									src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} 
									width="150"
									/>
								<br />
								{filme.title}
							</a>

						</li>
					))}
				</ul>
			</main>

		</div>
	)
}


//Contexto node (Server-Side)
export const getServerSideProps: GetServerSideProps = async () => {

		const res = await fetch('http://localhost:3000/api/trending')
		const json = await res.json()

		// console.log(json.list)
	

	return{
		props:{
				filmes: json.list
			
		}
	}
}


// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps