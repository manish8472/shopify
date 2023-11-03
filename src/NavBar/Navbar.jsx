import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Navbar.css";

export default function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        {/* <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a> */}
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}