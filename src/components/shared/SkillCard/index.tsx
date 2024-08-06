const SkillCard = ({ name }: { name: string }) => {
  return (
    <div
      style={{ boxShadow: "inset 0 -2px 3px 0 #178f98" }}
      className="bg-secondary rounded-md py-[4px] px-[6px]">
      {name}
    </div>
  );
};

export default SkillCard;
