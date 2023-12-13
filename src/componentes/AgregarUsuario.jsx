import { useState } from "react"
import '../estilos/Formulario.css'
/* el hijo recibe agregarTarea que n realidad es una funcion */
export const AgregarUsuario = ({ agregarTarea }) => {
    const [inputValue, setInputvalue] = useState('')

    const onInputChange = (event) => {
        setInputvalue(event.target.value)
    }

    /* const onSubmit = (event) => {
        const envio={
            nombre:inputValue,
            visto: false
        }
        event.preventDefault()
        //añadiendo un nuevo elemento usando el elemento que recibimos en AgregarTarea
        agregarTarea(tareas=>[...tareas,envio])
    } */

    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(inputValue)
    }

    return (
        <>
            <form className="formulario col" onSubmit={onSubmit}>
                <h3>INGRESE SUS DATOS SI LA PAGINA LE GUSTO</h3>
                <div className="mb-3 ingreso">
                    <label className="form-label nombre">Nombre</label>
                    <input type="text" className="form-control" value={inputValue} onChange={onInputChange} />
                </div>
                <div className="mb-3 ingreso">
                    <label className="form-label nombre">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button className="btn btn-primary">Me Gusta</button>
            </form>
            {/* <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="ingresa tarea"
                value={inputValue}
                onChange={onInputChange}
            />
        </form> */}
        </>
    )
}