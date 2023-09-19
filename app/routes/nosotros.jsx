import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

export const meta = () => {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de musica'
  }
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">

      </h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Etiam in enim id velit ornare ornare in non sapien. Integer vehicula augue quis interdum rutrum. Sed pretium eros nec erat gravida, ut auctor quam consectetur. Duis sollicitudin risus libero, sit amet rhoncus tortor maximus eu. Nullam ac felis ac lacus accumsan feugiat. Nulla sit amet urna sodales, vestibulum diam sed, congue magna. Maecenas egestas rhoncus ornare.</p>

          <p>Etiam in enim id velit ornare ornare in non sapien. Integer vehicula augue quis interdum rutrum. Sed pretium eros nec erat gravida, ut auctor quam consectetur. Duis sollicitudin risus libero, sit amet rhoncus tortor maximus eu. Nullam ac felis ac lacus accumsan feugiat. Nulla sit amet urna sodales, vestibulum diam sed, congue magna. Maecenas egestas rhoncus ornare.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros