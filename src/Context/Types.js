import { Car, CarColor, CarType } from "../Types/Index";
export const ContextData = {
  loading: false,
  setLoading: (value) => {
    ContextData.loading = value;
  },
  error: undefined,
  setError: (value) => {
    ContextData.error = value;
  },
  search: "",
  setSearch: (value) => {
    ContextData.search = value;
  },
  type: CarType,
  setType: (type) => {
    ContextData.type = type;
  },
  color: CarColor,
  setColor: (color) => {
    ContextData.color = color;
  },
  items: Car,
  filteredItems: [],
  fetchItems: () => {},
};
