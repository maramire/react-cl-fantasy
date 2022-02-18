import TextInput from "../Input/TextInput";
import PasswordInput from "../Input/PasswordInput";

function SignupCard(props) {
  return (
    <div className="mx-auto my-0 sm:w-3/12 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <div>Registrarse</div>
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
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupCard;
