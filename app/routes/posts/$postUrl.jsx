import { useLoaderData } from '@remix-run/react'
import { getPost } from "~/api/posts.server"
import {dateFormat} from '~/utils/helpers'

export const meta = ({data}) => {

    if(!data) {
        return {
            title: 'GuitarLA - Entrada no encontrada',
            description: 'Guitarras, venta de guitarras, Entrada no encontrada'
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        description: `Guitarras, centa de guitarras, entrada ${data.data[0].attributes.titulo}`
    }
}

export const loader = async ({ params }) => {
    const { postUrl } = params
    const post = await getPost(postUrl)
    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }
    return post
}

const Post = () => {
    const post = useLoaderData()
    const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes
    return (
        <article className='post mt-3'>
            <img src={imagen?.data?.attributes?.url} alt="" className="imagen" />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{dateFormat(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>
    )
}

export default Post