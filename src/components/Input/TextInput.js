function TextInput(props) {
  return (
    <>
      <label className="block text-gray-700" htmlFor="name">
        {props.label}
      </label>
      <input
        className="w-full rounded p-2 border border-gray-800"
        type="text"
        id="name"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default TextInput;
