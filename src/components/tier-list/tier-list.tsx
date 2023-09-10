import { useAppSelector } from "../../store";
import TierRow from "../tier-row/tier-row";

type TierListProps = React.HTMLProps<HTMLDivElement> & {};

export default function TierList({ ...rest }: TierListProps) {
  const tiers = useAppSelector((state) => state.tiers.value);

  return (
    <div {...rest}>
      {tiers.map((tier) => (
        <TierRow key={tier} title={tier} />
      ))}
    </div>
  );
}
