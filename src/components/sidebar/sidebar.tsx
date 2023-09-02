import "./sidebar.scss";
import Tile from "../tile/tile";
import EditItems from "../edit-items/edit-items";
import EditTiers from "../edit-tiers/edit-tiers";

export default function Sidebar() {
  const tiles = [
    <Tile
      title="Angular"
      key="Angular"
      url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
    />,
    <Tile
      key="React"
      title="React"
      url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    />,
    <Tile
      title="Vue"
      key="Vue"
      url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
    />,
  ];

  return (
    <div className="sidebar">
      <div className="tiles-wrapper">
        <div className="tiles">{tiles}</div>
      </div>
      <div className="actions mt-3">
        <EditItems />
        <EditTiers />
        <button className="btn btn-danger btn-clear">Clear</button>
        <button className="btn btn-warning btn-reset">Reset</button>
      </div>
    </div>
  );
}
