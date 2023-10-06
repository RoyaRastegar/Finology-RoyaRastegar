import { createContext, useContext, useEffect, useState } from "react";
import { browseCars } from "../Api/Cars";
import { ContextData } from "./Types";
// import { Car, CarColor, CarType } from "../Types/Index";
const context = createContext(ContextData);
const { Provider } = context;

export const useAppContext = () => useContext(context);

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState(undefined);
  const [color, setColor] = useState(undefined);
  const [items, setItems] = useState([]);
  const filteredItems = items.filter((x) => {
    let isOk = true;
    if (type) isOk = x.type === type;
    if (color) isOk &&= x.color === color;
    if (search) isOk &&= x.name.toLowerCase().includes(search.toLowerCase());
    return isOk;
  });

  const fetchItems = () => {
    browseCars()
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "unknown error");
      });
  };

  useEffect(fetchItems, []);

  return (
    <Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        search,
        setSearch,
        type,
        setType,
        color,
        setColor,
        items,
        fetchItems,
        filteredItems,
      }}
    >
      {children}
    </Provider>
  );
};
