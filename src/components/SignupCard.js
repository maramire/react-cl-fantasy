function SignupCard(props) {
  return (
    <div className="mx-auto my-0 sm:w-3/12 bg-white w-96 p-8 rounded-lg shadow-lg">
      <div>
        <div>Registrarse</div>
        <form className="mt-5">
          <div className="mb-4">
            <label className="block text-gray-700" for="name">
              Usuario
            </label>
            <input
              className="w-full rounded p-2 border border-gray-800"
              type="text"
              id="name"
              placeholder="Ingrese usuario"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" for="password">
              Contraseña
            </label>
            <input
              className="w-full rounded p-2 border border-gray-800"
              type="password"
              id="password"
              placeholder="Ingrese contraseña"
            />
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
