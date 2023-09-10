import { TileProps } from "../components/tile/tile";

export function handleOnDrag(
  e: React.DragEvent<HTMLDivElement>,
  tile: TileProps
) {
  e.dataTransfer.setData("tile", JSON.stringify(tile));
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.dropEffect = "move";
}

export function handleOnDragOver(e: React.DragEvent<HTMLDivElement>) {
  e.preventDefault();
}
