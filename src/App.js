import "./styles.css";
import Resturant from "./Components/Restaurants";
import Details from "./Details";
export default function App() {
  function rest(val, idx, arr) {
    return (
      <Resturant
        img={val.img}
        name={val.name}
        votes={val.votes}
        rating={val.rating}
        cost={val.cost}
        category={val.category}
        payment_method={val.payment_method}
        review={val.review}
      />
    );
  }
  return (
    <>
      <select className="select_rating" name="" id="">
        <option value="">Short By Rating</option>
        <option value="">Low to High</option>
        <option value="">High To Low</option>
      </select>
      {Details.map(rest)}
    </>
  );
}
