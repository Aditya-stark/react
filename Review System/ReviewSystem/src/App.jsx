import "./App.css";
import Review from "./Component/ReviewCard/Review";
import data from "../src/data";

function App() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {data.map((review) => (review ? <Review key={review.id} data={review} /> : null))}
    </div>
  );
}

export default App;
