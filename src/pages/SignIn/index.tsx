import Button from '../../components/Button'
import Input from '../../components/Input'

const SignIn = (): JSX.Element => {
  return (
    <div>
      <h1>Pantalla de Login</h1>
      <Input
        name="Email"
        type="text"
        onChange={(evt) => console.log(evt.target.value)}
        required={true}
      />
      <Input
        name="Contraseña"
        type="password"
        onChange={(evt) => console.log(evt.target.value)}
        required={true}
      />
      <Button text="Iniciar sesión" type="submit" />
    </div>
  )
}

export default SignIn
