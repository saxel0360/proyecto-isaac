
import '../estilos/Formulario.css'
import { useState } from "react"
import { AgregarUsuario } from './AgregarUsuario'
const Items = ({ nombre, visto }) => {
    return (
        <li>{nombre}
            {visto ? '✅' : '👍'}
        </li>
    )
}

export const Formulario = () => {
    let usuarios = [
        { id: 1, nombre: "Isaac Joel Illatarco Anaya", visto: true }
    ]
    const [arreglo, setArreglo] = useState(usuarios)
    const onAgregarTarea = (val) => {
        val = val.trim()
        if (val < 1) return
        const envio = {
            id: arreglo.length + 1,
            nombre: val,
        }
        setArreglo([...arreglo, envio])
    }
    return (
        <>
            <div className="container-fluid padre-f">
                <div className="row">
                    <div className="col-xxl col-xl col-lg col-md-12 col-sm-12 col-12">
                        <AgregarUsuario agregarTarea={onAgregarTarea}></AgregarUsuario>
                    </div>
                    <div className="col-xxl col-xl col-lg col-md-12 col-sm-12 col-12 usuarios">
                        <h3>Lista de Usuarios que les Gusta la Pagina</h3>
                        <ol>
                            {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
