import React, { useState } from 'react'
import Alert from './Alert';
import MensajeValidacion from './Mensaje';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [botonDesactivado, setBotonDesactivado] = useState(true);

    const handleNombreChange = (e) => {
        setUsuario(e.target.value);
        setBotonDesactivado(e.target.value === '' || contrasena === '');

    }
    const handleContrasenaChange = (e) => {
        setContrasena(e.target.value)
        setBotonDesactivado(usuario === '' || e.target.value === '');
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const resultadoValidacion = Alert(usuario, contrasena);
    setMensaje(resultadoValidacion);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group text-center w-25'>
                <input className='container form-control' value={usuario} name='usuario' type='text' onChange={handleNombreChange} />
                <input className='container form-control' value={contrasena} type='password' onChange={handleContrasenaChange}/>
                <button type='submit text-center' className='btn btn-primary' disabled={botonDesactivado}>Enviar</button>
            </div>
        </form>
        <MensajeValidacion className="mensaje" mensaje={mensaje} />
    </div>
  )
}

export default Login