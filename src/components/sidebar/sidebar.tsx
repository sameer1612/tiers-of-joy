
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setTiers } from "../../redux/tierSlice";
import { addTile, removeTile, setTiles } from "../../redux/tilesSlice";
import { handleOnDrag, handleOnDragOver } from "../../utils/drag-handler";
import EditItems from "../edit-items/edit-items";
import EditTiers from "../edit-tiers/edit-tiers";
import Tile from "../tile/tile";
import "./sidebar.scss";

type SidebarProps = React.HTMLProps<HTMLDivElement> & {};

export default function Sidebar({ className, ...rest }: SidebarProps) {
  const tiles = useAppSelector((state) => state.tiles.value).filter(
    (t) => !t.tier
  );
  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(setTiles([]));
    dispatch(setTiers([]));
  };

  const handleReset = () => {
    console.log()
    dispatch(setTiles(tiles));
  };

  function handleOnDrop(e: React.DragEvent<HTMLDivElement>) {
    const tileJSON = e.dataTransfer.getData("tile");
    if (tileJSON) {
      const tile = JSON.parse(tileJSON);
      dispatch(removeTile(tile));
      setTimeout(() => {
        dispatch(addTile({ ...tile, tier: null }));
      }, 50);
    }
  }

  return (
    <div
      {...rest}
      className={className + " sidebar"}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
    >
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
      <div className="edit-row mt-1">
        <button
          className="btn btn-sm btn-danger btn-clear w-100 mt-2"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="btn btn-sm btn-warning btn-dark w-100 mt-2"
          onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
