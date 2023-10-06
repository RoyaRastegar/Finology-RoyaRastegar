import { useAppContext } from "../../Context/Context";
import "./styles.css";

function CarListItem({ car }) {
  return (
    <section className="CarListItem">
      <img className="CarListItem-image" src={car.image} alt={car.name} />

      <div className="CarListItem-detail">
        <h2>{car.name}</h2>
        <p>{car.description}</p>
      </div>

      <div className="CarListItem-footer">
        <div className="CarListItem-price">
          <b>price:</b>
          <span>{car.price}</span>
        </div>

        <div className="CarListItem-color" style={{ background: car.color }} />
      </div>
    </section>
  );
}

export default function CarList() {
  const { filteredItems } = useAppContext();
  return (
    <section className="CarList">
      {filteredItems.map((car) => (
        <CarListItem key={car.id} car={car} />
      ))}
    </section>
  );
}
