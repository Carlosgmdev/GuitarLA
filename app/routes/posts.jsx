import {Outlet } from '@remix-run/react';
import styles from '~/styles/blog.css'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

const Posts = () => {

  return (
    <main className="contenedor">
     <Outlet/>
    </main>
  )
}

export default Posts