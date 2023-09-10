import { useState } from "react";
import { Modal } from "react-bootstrap";
import { concatTiles, removeTile } from "../../slices/tilesSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Tile from "../tile/tile";
import "./edit-items.scss";

export default function EditItems() {
  const [show, setShow] = useState(false);
  const [inputUrls, setInputUrls] = useState("");

  const tiles = useAppSelector((state) => state.tiles.value);
  const dispatch = useAppDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDelete = (tile: { title: string; url: string }) => {
    dispatch(removeTile(tile));
  };
  const handleImport = () => {
    const lines = inputUrls
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => !!l);

    const newTiles = lines.map((line) => {
      const tokens = line.split(" ");
      if (tokens.length === 2) {
        return { title: tokens[1], url: tokens[0] };
      } else {
        return { title: tokens[0], url: tokens[0] };
      }
    });
    dispatch(concatTiles(newTiles));
    setInputUrls("");
  };

  function RemovableTile({ title, url }: { title: string; url: string }) {
    return (
      <div className="tile-wrapper card p-2">
        <button
          className="btn btn-remove btn-close"
          onClick={() => handleDelete({ title, url })}
        ></button>
        <Tile title={title} key={url} url={url} />
      </div>
    );
  }

  return (
    <>
      <button className="btn btn-dark btn-sm" onClick={handleShow}>
        Edit Items
      </button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        centered
        className="edit-items"
      >
        <div className="p-3">
          <h5 className="mb-4">Edit Items</h5>
          <div className="wrapper">
            <textarea
              name="urls"
              id="urls"
              rows={6}
              className="form-control"
              placeholder={
                "Enter image title and urls in following format: \n\nurl1 title1 \nurl2 title2 \nor \ntitle (in case of text only tile)"
              }
              value={inputUrls}
              onChange={(e) => setInputUrls(e.target.value)}
            ></textarea>
            <button
              className="btn btn-info btn-sm btn-import mt-2 px-4"
              onClick={handleImport}
            >
              Import
            </button>

            <div className="container-fluid mt-5 tiles-container">
              {tiles.map((t) => (
                <RemovableTile {...t} key={t.url} />
              ))}
            </div>
          </div>
        </div>
        <div className="p-3 d-flex justify-content-end">
          <button
            className="btn btn-sm btn-secondary px-4"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
