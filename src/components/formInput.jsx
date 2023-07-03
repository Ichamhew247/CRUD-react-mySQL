// function FormInput({ placeholder }) {
//   return (
//     <>
//       <input placeholder={placeholder} className="border " />
//     </>
//   );
// }

// export default FormInput;

function FormInput(props) {
  const { placeholder, name, value, onChange } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default FormInput;
