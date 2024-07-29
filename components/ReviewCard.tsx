const ReviewCard: React.FC<React.PropsWithChildren<CardType>> = ({
  children,
  title,
  desc,
}) => {
  return (
    <div className="grid rounded-md border bg-white p-6">
      <div className="mb-4 flex items-center justify-center">{children}</div>
      <p className="text-center text-lg font-extrabold">{title}</p>
      <p className="text-center text-gray-400">{desc}</p>
    </div>
  );
};

export default ReviewCard;
