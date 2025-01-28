import { Button } from 'semantic-ui-react'
import { useAuth } from "@/hooks";

export default function index() {
  const { user, logout } = useAuth();
  console.log(user);

  return (
    <div>
      <h1>Games Shop</h1>
    <Button content='Primary' primary />
    
    {user ? (
      <div>
        <p>Bienvenido {user.username}</p>
        <Button onClick={logout}>Cerrar Sesión</Button>
      </div>
    ):(
      <div>
        <a href='/join/sign-in'>Iniciar Sesión</a>
      </div>
    )}
  </div>
  )
}
