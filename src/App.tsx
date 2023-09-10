import { useEffect } from "react";
import "./App.scss";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import TierList from "./components/tier-list/tier-list";
import { frameworks } from "./data/frameworks";
import { sampleTiers } from "./data/sample-tiers";
import { setTiers } from "./slices/tierSlice";
import { concatTiles, setTiles } from "./slices/tilesSlice";
import { useAppDispatch } from "./store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(concatTiles(frameworks));
    dispatch(setTiers(sampleTiers));

    return () => {
      dispatch(setTiles([]));
      dispatch(setTiers([]));
    };
  }, []);

  return (
    <>
      <Header />
      <main className="row m-3">
        <Sidebar className="col-3" />
        <TierList className="col-9" />
      </main>
    </>
  );
}

export default App;
