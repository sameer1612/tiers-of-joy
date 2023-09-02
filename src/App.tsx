import "./App.scss";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import TierList from "./components/tier-list/tier-list";

function App() {
  return (
    <>
      <Header />
      <main className="row m-3">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <TierList />
        </div>
      </main>
    </>
  );
}

export default App;
