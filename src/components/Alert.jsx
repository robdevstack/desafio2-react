



 const Alert = (usuario, contrasena) => {
  if(usuario === 'admin' && contrasena === '12345'){
    return 'inicio de sesion exitoso'
  }else{
    return 'inicio de sesion no exitoso'
  }
}
export default Alert

