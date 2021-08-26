import "./styles.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FormBuilder from "./components/FormBuilder";
import Preview from "./components/Preview";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <FormBuilder />
    </div>
  );
}
