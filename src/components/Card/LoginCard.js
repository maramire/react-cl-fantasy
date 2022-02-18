import PasswordInput from "../Input/PasswordInput";
import TextInput from "../Input/TextInput";

function LoginCard() {
  return (
    <div className="mx-auto my-0 lg:w-3/12 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <div>Iniciar Sesión</div>
        <form className="mt-5">
          <div className="mb-4">
            <TextInput label="Usuario" placeholder="Ingrese usuario" />
          </div>
          <div className="mb-4">
            <PasswordInput placeholder="Ingrese contraseña" />
          </div>
          <button
            className="mt-4 text-white w-full p-3 bg-blue-700 rounded-full "
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;
