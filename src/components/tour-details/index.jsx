import { useParams } from "react-router-dom";
import { tours } from "../../tour_data";
// import GTranslateWidget from "../lang";

function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id.toString() === id);

  if (!tour) {
    return (
      <div className="tour-page">
        <div className="container text-center text-red-500 py-10">
          <h1>❌ Tour not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-page">
      {/* <GTranslateWidget /> */}

      <div className="container">
        <div
          className="tour-hero"
          style={{ backgroundImage: `url(${tour.img})` }}
        >
          <h1>{tour.name}</h1>
        </div>
        <h1>Pictures</h1>

        <div className="images_row">
          {tour.images.map((img) => (
            <img src={img} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
