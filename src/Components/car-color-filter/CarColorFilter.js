import { useAppContext } from "../../Context/Context";
import { CarColor } from "../../Types/Index";
import "./styles.css";

function CarColorFilterItem({ color }) {
  const { color: current, setColor } = useAppContext();

  return (
    <button
      className={color === current ? "selected transition" : "transition"}
      onClick={() => setColor(color)}
    >
      {color || "all"}

      <div style={{ background: color }} />
    </button>
  );
}

export default function CarColorFilter() {
  return (
    <section className="CarColorFilter  ButtonGroup">
      <CarColorFilterItem />
      {Object.values(CarColor).map((color) => (
        <CarColorFilterItem color={color} />
      ))}
    </section>
  );
}
