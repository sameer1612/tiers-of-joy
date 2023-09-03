import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./edit-tiers.scss";

type EditTiersProps = {
  tiers: string[];
  setTiers: (tiers: string[]) => void;
};

export default function EditTiers({ tiers, setTiers }: EditTiersProps) {
  const [show, setShow] = useState(false);
  const [newTier, setNewTier] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleAdd = () => {
    if (newTier) {
      setTiers([...tiers, newTier]);
      setNewTier("");
    }
  };

  const handleRemove = (tier: string) => {
    setTiers(tiers.filter((t) => t !== tier));
  };

  return (
    <>
      <button className="btn btn-dark btn-sm" onClick={handleShow}>
        Edit Tiers
      </button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        centered
        className="edit-items"
      >
        <div className="p-3">
          <h5 className="mb-4">Edit Tiers</h5>
          <div className="d-flex">
            <input
              type="text"
              name="tier"
              id="tier"
              className="form-control"
              value={newTier}
              onChange={(e) => setNewTier(e.target.value)}
            />
            <button className="btn btn-info ms-3 px-5" onClick={handleAdd}>
              Add
            </button>
          </div>
          <div className="tier-wrapper mt-5">
            {tiers.map((t) => (
              <div className="tier btn btn-secondary btn-sm" key={t}>
                {t}
                <button
                  className="btn-close ms-2"
                  onClick={() => handleRemove(t)}
                ></button>
              </div>
            ))}
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
