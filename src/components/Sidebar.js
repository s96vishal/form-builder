import Toolbox from "./Toolbox";

const Sidebar = () => {
  const onDragStartHandler = (e, field) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(field));
  };
  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        {/* <li>Input</li>
        <li>Number Input</li>
        <li>Select</li>
        <li>Radio</li>
        <li>TextArea</li>
        <li>Date / Time</li>
        <li>Button</li> */}
        <Toolbox onDragStart={onDragStartHandler} />
      </ul>
    </div>
  );
};

export default Sidebar;
