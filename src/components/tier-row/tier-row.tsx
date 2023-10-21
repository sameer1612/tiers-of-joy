import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addTile, removeTile } from "../../redux/tilesSlice";
import { handleOnDrag, handleOnDragOver } from "../../utils/drag-handler";
import Tile from "../tile/tile";
import "./tier-row.scss";

type TierRowProps = {
  title: string;
};

export default function TierRow({ title }: TierRowProps) {
  const tiles = useAppSelector((state) => state.tiles.value).filter(
    (t) => t.tier === title
  );
  const dispatch = useAppDispatch();

  function handleOnDrop(e: React.DragEvent<HTMLDivElement>) {
    const tileJSON = e.dataTransfer.getData("tile");
    console.log("JSON", tileJSON)
    if (tileJSON) {
      const tile = JSON.parse(tileJSON);
      console.log(tile)
      console.log('ku', {...tile})
      dispatch(removeTile(tile));
      setTimeout(() => {
        dispatch(addTile({ ...tile, tier: title }));
      }, 50);
    }
  }

  return (
    <>
      <div
        className="card mb-2 py-2 px-3 tier-row"
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
      >
        <small className="mb-2 label">{title}</small>
        <div className="tile-wrapper">
          {tiles.map((t) => (
            <Tile
              key={t.title}
              title={t.title}
              url={t.url}
              onDragStart={(e) => handleOnDrag(e, t)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
