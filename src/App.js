import Layout from "./Components/Layout/Layout";
import HomeView from "./Home-View/HomeView";
import { AppProvider } from "../src/Context/Context";
function App() {
  return (
    <Layout title="Car Offer">
      <AppProvider>
        <HomeView />
      </AppProvider>
    </Layout>
  );
}

export default App;
