const Checkbox = (props) => {
  const attributes = { ...props };
  return (
    <div className="input-checkbox-control">
      <input type="checkbox" id={attributes.label} />
      <label htmlFor={attributes.label}>{attributes.label}</label>
    </div>
  );
};

export default Checkbox;
