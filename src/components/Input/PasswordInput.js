function PasswordInput(props) {
  return (
    <>
      <label className="block text-gray-700" htmlFor="password">
        Contraseña
      </label>
      <input
        className="w-full rounded p-2 border border-gray-800"
        type="password"
        id="password"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default PasswordInput;
