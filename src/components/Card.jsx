import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// This is Showing Card which is including all details of a item.

function Card({ img, title, reviews, prevPrice, newPrice, color }) {
  return (
    <section className="card">
      <img src={img} alt="Shoes" className="card-img" />
      <div className="card-details">
        <h4 className="card-title">{title}</h4>
        <section className="color-name">Color: {color}</section>
        <section className="card-reviews">
          <AiFillStar className="star-rating" />
          <AiFillStar className="star-rating" />
          <AiFillStar className="star-rating" />
          <AiFillStar className="star-rating" />
          <AiOutlineStar className="star-rating" />
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
