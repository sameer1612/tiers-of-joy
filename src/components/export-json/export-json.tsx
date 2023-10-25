import { useAppSelector } from "../../redux/store";

export default function ExportJSON() {
  const tiles = useAppSelector((state) => state.tiles.value).filter(
    (t) => t.tier
    );

  const handleShow = () => {
    const tileJSON = tiles;

    if (tileJSON) {
      let data = '';
      tiles.map((tile) => {
        const myJSON = JSON.stringify(tile);
        const unquoted = myJSON.replace(/\\"/g, "\uFFFF")
        .replace(/"([^"]+)":/g, '$1:').replace(/\uFFFF/g, '\\\"');;
        data += unquoted;
        data += ","
      })

      const element = document.createElement("a");
      const textFile = new Blob([data], {type: "application/json"});
      element.href = URL.createObjectURL(textFile);
      element.download = "data.json";
      document.body.appendChild(element);
      element.click();
    }
  }

    return (
      <>
        <button className="btn btn-dark btn-sm" onClick={handleShow}>
            Export as JSON
        </button>
      </>
    )
  }
  