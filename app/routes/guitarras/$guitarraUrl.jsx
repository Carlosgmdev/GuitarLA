import { useState } from "react"
import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "../../api/guitarras.server"

export const loader = async ({ params }) => {
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)
    if(guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }
    return guitarra
}

export const meta = ({data}) => {

    if(!data) {
        return {
            title: 'GuitarLA - Guitarra No Encontrada',
            description: 'Guitarras, centa de guitarras, Guitarra no encontrada'
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, centa de guitarras, guitarra ${data.data[0].attributes.nombre}`
    }
}

const Guitarra = () => {
    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes
    const handleSubmit = e => {
        e.preventDefault();
        if(cantidad < 1) {
            alert('Debes seleccionar una cantidad')
            return
        }
        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
    }
    return (
        <div className="guitarra">
            <img src={imagen.data.attributes.url} alt={`Imagen de la Guitarra ${nombre}`} className="imagen" />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">${precio}</p>
                <form 
                    className="formulario"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="qty">Cantidad</label>
                    <select 
                        name="cantidad" 
                        id="qty"
                        onChange={e => setCantidad(parseInt(e.target.value))} 
                    >
                        <option value="0">--Seleccione--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input 
                        type="submit" 
                        value="Agregar al Carrito"
                    />
                </form>
            </div>
        </div>
    )
}

export default Guitarra