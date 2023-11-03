import "./Price.css";
import Input from "../../components/input";

function Price({ handleChange }) {
  console.log(handleChange);
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - $50"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="$150 - $200"
          name="test"
        />
      </div>
    </div>
  );
}

export default Price;
