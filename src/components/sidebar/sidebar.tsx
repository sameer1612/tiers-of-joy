import React from "react";
import { setTiers } from "../../slices/tierSlice";
import { setTiles } from "../../slices/tilesSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import EditItems from "../edit-items/edit-items";
import EditTiers from "../edit-tiers/edit-tiers";
import Tile, { TileProps } from "../tile/tile";
import "./sidebar.scss";

type SidebarProps = React.HTMLProps<HTMLDivElement> & {};

export default function Sidebar({ className, ...rest }: SidebarProps) {
  const tiles = useAppSelector((state) => state.tiles.value);
  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(setTiles([]));
    dispatch(setTiers([]));
  };

  function handleOnDrag(e: React.DragEvent<HTMLDivElement>, tile: TileProps) {
    e.dataTransfer.setData("tile", JSON.stringify(tile));
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
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
        <EditItems />
        <EditTiers />
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
