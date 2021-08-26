const TextArea = (props) => {
  const attributes = { ...props };
  return (
    <div className="form-control">
      <label htmlFor={attributes.label}>{attributes.label}</label>
      <textarea
        value={attributes.value}
        placeholder={attributes.placeholder}
        title={attributes.title}
        id={attributes.label}
      />
    </div>
  );
};

export default TextArea;
