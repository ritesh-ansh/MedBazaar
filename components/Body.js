import Order from "./Body/Order";
// import Slider from "./Body/Slider";

function Body({ page }) {
  return (
    <div>
      <Order page={page} />
      {/* <Slider /> */}
    </div>
  );
}

export default Body;
