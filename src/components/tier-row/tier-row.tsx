import "./tier-row.scss";
import Tile, { TileProps } from "../tile/tile";

type TierRowProps = {
  title: string;
  tiles: Array<TileProps>;
};

export default function TierRow({ title, tiles }: TierRowProps) {
  return (
    <>
      <div className="card mb-2 py-2 px-3 tier-row">
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
