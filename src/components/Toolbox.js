import { Tools } from "../components/constants";

const Toolbox = ({ onDragStart }) => {
  return (
    <div className="toolbar-items">
      {Tools.map((field) => {
        return (
          <li
            key={field.name}
            draggable
            onDragStart={(e) => {
              onDragStart(e, field);
            }}
          >
            {field.title}
          </li>
        );
      })}
    </div>
  );
};

export default Toolbox;
