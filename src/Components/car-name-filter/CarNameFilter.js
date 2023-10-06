import { useAppContext } from "../../Context/Context";
import "./styles.css";

export default function CarNameFilter() {
  const { search, setSearch } = useAppContext();

  return (
    <input
      className="CarNameFilter transition"
      value={search}
      placeholder="Enter the car name"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
