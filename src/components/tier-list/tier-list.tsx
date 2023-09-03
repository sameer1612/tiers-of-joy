import TierRow from "../tier-row/tier-row";

type TierListProps = React.HTMLProps<HTMLDivElement> & {
  tiers: string[];
};

export default function TierList({ tiers, ...rest }: TierListProps) {
  return (
    <div {...rest}>
      {tiers.map((tier) => (
        <TierRow key={tier} title={tier} />
      ))}
    </div>
  );
}
