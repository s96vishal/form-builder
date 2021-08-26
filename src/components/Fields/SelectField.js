const SelectField = (props) => {
  const attributes = { ...props };
  return (
    <div className="form-control">
      <label htmlFor={attributes.label}>{attributes.label}</label>
      <select name={attributes.label} id={attributes.label}>
        <option valuee="option1">Option1</option>
        <option valuee="option2">Option2</option>
        <option valuee="option3">Option3</option>
      </select>
    </div>
  );
};

export default SelectField;
