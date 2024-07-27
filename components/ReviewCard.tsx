const ReviewCard: React.FC<React.PropsWithChildren<CardType>> = ({
	children,
	title,
	desc,
}) => {
	return (
		<div className="grid border rounded-md p-6 bg-white">
			<div className="flex justify-center items-center mb-4">
				{children}
			</div>
			<p className="text-lg font-extrabold text-center">{title}</p>
			<p className="text-gray-400 text-center">{desc}</p>
		</div>
	);
};

export default ReviewCard;
