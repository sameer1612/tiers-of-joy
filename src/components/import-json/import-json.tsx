import { useState } from "react";
import { Modal } from "react-bootstrap";

import { addTile, removeTile } from "../../redux/tilesSlice";
import { setTiers } from "../../redux/tierSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Tile from "../tile/tile";
// import "./edit-items.scss";

export default function ImportJSON() {
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
          .replace(/[\n{}]/g, "")
          .split("{}")
          
          .map((l) => l.trim())
        //   .filter((l) => !!l);
        
        console.log("Split", lines)
        const newTiles = lines.map((line) => {
          const tokens = line.split(",");
          console.log("Length", tokens.length)
          if (tokens.length !== 1) {
            return { url: tokens[2], title: tokens[1], tier: tokens[0] };
          } 
        //   if (tokens.length === 2) {
        //     return { url: tokens[2], title: tokens[1], tier: tokens[1] };
        //   } else {
        //     return { url: tokens[0], title: tokens[0], tier: tokens[1] };
        //   }
        });
        console.log("newTiles", newTiles)
        dispatch(addTile({newTiles}));
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
                Import
            </button>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                centered
                className="edit-items"
            >
                <div className="p-3">
                    <h5 className="mb-4">Import</h5>
                    <div className="wrapper">
                        <textarea
                            name="urls"
                            id="urls"
                            rows={10}
                            className="form-control"
                            placeholder={
                                "Enter url, title and tier in JSON format: \n\n{\nurl1: 'url1',\ntitle1: 'title1'\,\ntier1: 'tier1'\n},\n{\nurl2: 'url2',\ntitle2: 'title2',\ntier2: 'tier2'\n}"
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
    )
}