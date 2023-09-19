import { useLoaderData } from '@remix-run/react';
import {getPosts} from '~/api/posts.server';
import ListadoPosts from '~/components/listado-posts';

export const meta = () => {
  return {
      title: 'GuitarLa - Nuestro Blog',
      description: 'GuitarLA, Blog de musica, venta de guitarras '
  }
}


export const loader = async () => {
  const posts = await getPosts();
  return posts.data
}

const Blog = () => {

  const posts = useLoaderData();

  return (
     <ListadoPosts
      posts={posts}
     />
  )
}

export default Blog