const DateTime = (props) => {
  const attributes = { ...props };
  return (
    <>
      <div className="form-control">
        <label htmlFor={attributes.label}>{attributes.label}</label>
        <input type="date" />
      </div>
    </>
  );
};

export default DateTime;
