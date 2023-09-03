import "./tile.scss";

export type TileProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  url: string;
};

export default function Tile({ title, url, className, ...rest }: TileProps) {
  return (
    <div {...rest} className={className + " tile"}>
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
