import { useState } from "react";

import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const data = {
    card1: {
      img: "https://images.pexels.com/photos/28388326/pexels-photo-28388326/free-photo-of-three-people-sitting-on-the-beach-under-an-umbrella.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "The Vacation",
      dis: "some random vaction decription",
      btnTxt: "Book Now",
    },
    card2: {
      img: "https://images.pexels.com/photos/27295206/pexels-photo-27295206/free-photo-of-orion-nebula-m42-through-oiii-oxygen-filter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "The Space",
      dis: "some random Space and galaxy decription",
      btnTxt: "Vist Now",
    },
  };

  return (
    <>
      <h1 className="bg-gray-700 text-white p-8 rounded-xl mb-10">
        Props Card
      </h1>
      <Card
        img={data.card1.img}
        title={data.card1.title}
        dis={data.card1.dis}
        btnTxt={data.card1.btnTxt}
      ></Card>

      <Card
        img={data.card2.img}
        title={data.card2.title}
        dis={data.card2.dis}
        btnTxt={data.card2.btnTxt}
      ></Card>
    </>
  );
}

export default App;
