import { useState } from 'react';
import { Modal } from "react-bootstrap";

import { addTile, removeTile } from "../../redux/tilesSlice"; 
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Tile from "../tile/tile";

export default function ImportJSON() {
    const [show, setShow] = useState(false);
    const [file, setFile] = useState<File | null>(null);

    const tiles = useAppSelector((state) => state.tiles.value);
    const dispatch = useAppDispatch();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleDelete = (tile: { title: string; url: string }) => {
        dispatch(removeTile(tile));
      };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };

    // store text data from importing file.json
    let input = '';

    function handleUpload() {
      if (file) {
        let reader = new FileReader();
        reader.readAsText(file)
        reader.onload = function() {
          if (reader.result  !== null) {
             input = reader.result as string;
            handleImport(input)
          }
        }
      }
      else {
        alert("Error: Choose a file.json")
      }
    };

    const handleImport = (input: string) => {
        const lines = input
          .replace(/[\n""'' ]/g, "")
          .replace(/tier:/g, "")
          .replace(/title:/g, "")
          .replace(/url:/g, "")
          .split("},")
          .map((l) => l
            .replace(/[{}]/g, "")
            .trim())
        //   .filter((l) => !!l);
        
        lines.map((line) => {
          const tokens = line.split(",");
          if (tokens.length === 3) {
            dispatch(removeTile({  title: tokens[1], tier: tokens[2], url: tokens[0] }))
            dispatch(addTile({  title: tokens[1], tier: tokens[2], url: tokens[0] }));
            
          }
        //   if (tokens.length === 2) {
        //     return { url: tokens[2], title: tokens[1], tier: tokens[1] };
        //   } else {
        //     return { url: tokens[0], title: tokens[0], tier: tokens[1] };
        //   } 
        });
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
                        <input className="btn btn-dark btn-sm" type='file' id='file' placeholder="Import" onChange={handleFileChange} />

                        <button
                            className="btn btn-info btn-sm btn-import mt-2 px-4"
                            onClick={handleUpload}
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