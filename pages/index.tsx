import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Movies.module.css'



const Home: NextPage = () => {
  return (
    <div>
        
        <Link href={"/trending"}>
          <h1> Meus Filmes Favoritos!</h1>
        </Link>
    </div>
  )
}

export default Home