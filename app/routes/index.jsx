import { getGuitarras } from '~/api/guitarras.server'
import { getPosts } from '~/api/posts.server'
import {getCurso} from '~/api/curso.server'
import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/listado-guitarras'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesBlog from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
import ListadoPosts from '../components/listado-posts'
import Curso from '../components/curso'

export const meta = () => {

}

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesBlog
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export const loader = async () => {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

const Index = () => {

  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

        <Curso
          curso={curso.attributes}
        />

      <section className="contenedor">
        <ListadoPosts
          posts = {posts}
        />
      </section>
    </>
  )
}

export default Index