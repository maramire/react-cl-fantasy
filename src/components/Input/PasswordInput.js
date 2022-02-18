function PasswordInput(props) {
  return (
    <>
      <label className="block text-gray-700" for="password">
        Contraseña
      </label>
      <input
        className="w-full rounded p-2 border border-gray-800"
        type="password"
        id="password"
        placeholder={props.placeholder}
      />
    </>
  );
}

export default PasswordInput;
