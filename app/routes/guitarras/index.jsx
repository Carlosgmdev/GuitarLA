import { useLoaderData} from '@remix-run/react' 
import {getGuitarras} from '~/api/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'

export const meta = () => {
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLA - Nuestra Colección de Guitarras'
  }
}

export const  loader = async () => {
  const guitarras = await getGuitarras()
  return guitarras.data
}

const Tienda = () => {

  const guitarras = useLoaderData()

  return (
      <ListadoGuitarras
        guitarras={guitarras}
      />
  )
}

export default Tienda