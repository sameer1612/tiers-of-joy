import "./tile.scss";

export type TileProps = {
  title: string;
  url: string;
};

export default function Tile({ title, url }: TileProps) {
  return (
    <div className="tile">
      <img
        src={url}
        alt={title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/placeholder.jpg";
        }}
      />
      <small>{title}</small>
    </div>
  );
}
