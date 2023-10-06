import { useAppContext } from "../../Context/Context";
import { CarType } from "../../Types/Index";
import "./styles.css";

function CarTypeFilterItem({ type }) {
  const { type: current, setType } = useAppContext();

  return (
    <button
      className={type === current ? "selected transition" : "transition"}
      onClick={() => setType(type)}
    >
      {type || "all"}
    </button>
  );
}

export default function CarTypeFilter() {
  return (
    <section className="CarTypeFilter  ButtonGroup">
      <CarTypeFilterItem />

      {Object.values(CarType).map((type) => (
        <CarTypeFilterItem type={type} />
      ))}
    </section>
  );
}
