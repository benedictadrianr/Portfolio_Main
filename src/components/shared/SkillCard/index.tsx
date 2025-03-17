const SkillCard = ({ name }: { name: string }) => {
  return (
    <div
      style={{ boxShadow: "0 0 10px 0 #0CB0BC" }}
      className="bg-primary-600 rounded-full flex items-center justify-center py-[4px] px-[16px]">
      {name}
    </div>
  );
};

export default SkillCard;
