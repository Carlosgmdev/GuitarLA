import {Outlet } from '@remix-run/react' 
import styles from '~/styles/guitarras.css'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

const Tienda = () => {
  return (
    <main className="contenedor">
      <Outlet/>
    </main>
  )
}

export default Tienda