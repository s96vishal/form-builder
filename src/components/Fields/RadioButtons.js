const Radio = (props) => {
  const attributes = { ...props };
  return (
    <div className="input-radio-control">
      <input
        type="radio"
        id={attributes.label}
        value="Vicky"
        name={attributes.label}
      />
      <label htmlFor={attributes.label}>{attributes.label}</label>
    </div>
  );
};

export default Radio;
