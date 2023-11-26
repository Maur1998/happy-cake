import { useState } from "react"

export const Contacto = () => {
    const [correo, setCorreo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (correo.length != 0 & descripcion.length != 0){
            alert("Gracias por contactarse con nosotros")
        } else {
            alert("Por favor complete los campos")
        }
    }
  return (
    <div>
        <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
            <h1>Cuentanos, ¿en qué te podemos ayudar?</h1>
            <div className="d-flex flex-column align-items-center mb-3">
                <p>Correo</p>
                <input className="form-control" placeholder="Ingresa tu correo" value={correo} onChange={(e)=>{setCorreo(e.target.value)}} />
            </div>

            <div className="d-flex flex-column align-items-center mb-3">
                <p>Descripción</p>
                <textarea className="form-control" value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}} />
            </div>
            <button type="submit" className="btn btn-danger">Enviar</button>
        </form>
    </div>
  )
}
