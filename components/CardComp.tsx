const CardComp: React.FC<React.PropsWithChildren<CardType>> = ({
	children,
	title,
	desc,
	buttonInp,
}) => {
	return (
		<div className="transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110 grid border rounded-md p-6 bg-white">
			<div className="flex justify-center items-center mb-4">
				{children}
			</div>
			<p className="text-lg font-extrabold text-center">{title}</p>
			<p className="text-gray-400 text-center">{desc}</p>
			<div className="flex justify-center">
				<button className="bg-green-600 text-white text-center justify-center rounded-md text-sm font-medium sm:w-24 sm:h-10 w-24 h-10">
					{buttonInp}
				</button>
			</div>
		</div>
	);
};

export default CardComp;
