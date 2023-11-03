import "./Colors.css";
import Input from "../../components/input";

function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        color="black"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        color="blue"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        color="red"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        color="green"
        name="test"
      />

      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        color="white"
        name="test"
      />
    </div>
  );
}

export default Colors;
