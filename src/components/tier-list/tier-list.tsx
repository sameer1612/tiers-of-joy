import TierRow from "../tier-row/tier-row";

export default function TierList() {
  return (
    <div>
      <TierRow
        key={"exc"}
        title="Excellent"
        tiles={[
          {
            title: "React",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          },
          {
            title: "Angular",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
          },
        ]}
      />
      <TierRow
        key={"Very"}
        title="Very Good"
        tiles={[{ title: "React", url: "" }]}
      />
      <TierRow
        key={"Good"}
        title="Good"
        tiles={[{ title: "React", url: "" }]}
      />
      <TierRow key={"Meh"} title="Meh" tiles={[{ title: "React", url: "" }]} />
    </div>
  );
}
