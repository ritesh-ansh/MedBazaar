import Flatlist from "./Body/Flatlist";
import Order from "./Body/Order";

function Body({ page }) {
  return (
    <div>
      <Flatlist images />
      <Order page={page} />
      {/* <Slider /> */}
    </div>
  );
}

export default Body;

const images = [
  {
    id: 1,
    source: "https://source.unsplash.com/random/200x300",
  },
  {
    id: 2,
    source: "https://source.unsplash.com/random/200x300",
  },
  {
    id: 3,
    source: "https://source.unsplash.com/random/200x300",
  },
  {
    id: 4,
    source: "https://source.unsplash.com/random/200x300",
  },
  {
    id: 5,
    source: "https://source.unsplash.com/random/200x300",
  },
  {
    id: 6,
    source: "https://source.unsplash.com/random/200x300",
  },
];
