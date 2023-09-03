import { useState } from "react";
import "./App.scss";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import TierList from "./components/tier-list/tier-list";
import { sampleTiers } from "./data/sample-tiers";

function App() {
  const [tiers, setTiers] = useState<string[]>(sampleTiers);

  return (
    <>
      <Header />
      <main className="row m-3">
        <Sidebar className="col-3" tiers={tiers} setTiers={setTiers} />
        <TierList className="col-9" tiers={tiers} />
      </main>
    </>
  );
}

export default App;
