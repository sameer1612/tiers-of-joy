import { useState } from "react";
import Tile, { TileProps } from "../tile/tile";
import "./tier-row.scss";

type TierRowProps = {
  title: string;
};

export default function TierRow({ title }: TierRowProps) {
  const [tiles, setTiles] = useState<TileProps[]>([]);

  function handleOnDrop(e: React.DragEvent<HTMLDivElement>) {
    const tileJSON = e.dataTransfer.getData("tile");
    if (tileJSON) {
      const tile = JSON.parse(tileJSON);
      setTiles([...tiles, tile]);
    }
  }

  function handleOnDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
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
          {tiles.map((e) => (
            <Tile key={e.title} title={e.title} url={e.url} />
          ))}
        </div>
      </div>
    </>
  );
}
