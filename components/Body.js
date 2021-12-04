import Flatlist from "./Body/Flatlist";
import Order from "./Body/Order";

function Body({ page }) {
  return (
    <div>
      <Flatlist />
      <Order page={page} />
      {/* <Slider /> */}
    </div>
  );
}

export default Body;
