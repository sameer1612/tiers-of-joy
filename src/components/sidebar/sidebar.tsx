import React, { useState } from "react";
import { frameworks } from "../../data/frameworks";
import EditItems from "../edit-items/edit-items";
import EditTiers from "../edit-tiers/edit-tiers";
import Tile, { TileProps } from "../tile/tile";
import "./sidebar.scss";

type SidebarProps = React.HTMLProps<HTMLDivElement> & {
  tiers: string[];
  setTiers: (tiers: string[]) => void;
};

export default function Sidebar({
  className,
  tiers,
  setTiers,
  ...rest
}: SidebarProps) {
  const [tiles, setTiles] = useState<TileProps[]>(frameworks);

  const handleClear = () => {
    setTiles([]);
    setTiers([]);
  };

  function handleOnDrag(e: React.DragEvent<HTMLDivElement>, tile: TileProps) {
    e.dataTransfer.setData("tile", JSON.stringify(tile));
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    setTimeout(() => {
      setTiles(tiles.filter((t) => t.url !== tile.url));
    }, 1000);
  }

  return (
    <div {...rest} className={className + " sidebar"}>
      <div className="tiles-wrapper">
        <div className="tiles">
          {tiles.map((t) => (
            <Tile {...t} key={t.url} onDragStart={(e) => handleOnDrag(e, t)} />
          ))}{" "}
        </div>
      </div>
      <div className="edit-row mt-3">
        <EditItems tiles={tiles} setTiles={setTiles} />
        <EditTiers tiers={tiers} setTiers={setTiers} />
      </div>
      <button
        className="btn btn-sm btn-danger btn-clear w-100 mt-2"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
}
