import { useState } from "react";

type NavItemProps = {
	link: string;
	subtitle: string;
	children: React.ReactNode;
};

type BurgerMenuProps = {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
};

const NavItem = ({ link, subtitle, children }: NavItemProps) => {
	return (
		<a
			className="group relative inline-block mr-8 outline-none no-underline text-gray-300 tracking-wide focus:outline-none py-4 px-5 text-center hover:text-gray-100"
			href={link}
		>
			{/* a::before */}
			<span
				className="absolute top-0 left-0 w-full h-px bg-pink-500 opacity-20 transition-all duration-300 transform group-hover:h-1.5 group-hover:opacity-100 group-hover:translate-y-0"
				aria-hidden="true"
			/>
			<span className="block">{children}</span>
			<span className="block pt-2 text-pink-500 italic font-extralight text-sm lowercase tracking-wide font-serif opacity-0 transition-all duration-300 transform -translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
				{subtitle}
			</span>
			{/* a::after */}
			<span
				className="absolute top-full left-0 w-full h-px bg-gray-100 opacity-0 transition-all duration-300 transform -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0"
				aria-hidden="true"
			/>
		</a>
	);
};

const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuProps) => {
	return (
		<button
			className="md:hidden relative block w-6 h-6 border border-none outline-none focus:outline-none"
			onClick={() => setIsOpen(!isOpen)}
		>
			<span className="relative block h-1">
				{/* Top line */}
				<span
					className={`absolute top-0 left-1/2 block w-full h-1 bg-red-400 transition-all duration-500 transform ${
						isOpen ? "animate-burgerTop" : "-translate-x-1/2 -translate-y-2"
					}`}
					aria-hidden="true"
				/>
				{/* Middle line */}
				<span
					className={`block w-full h-1 bg-red-400 transition-all duration-200 ${
						isOpen ? "opacity-0" : "opacity-100"
					}`}
					aria-hidden="true"
				/>
				{/* Bottom line */}
				<span
					className={`absolute bottom-0 left-1/2 block w-full h-1 bg-red-400 transition-all duration-500 transform -translate-x-1/2  ${
						isOpen ? "animate-burgerBottom" : "-translate-x-1/2 translate-y-2"
					}`}
					aria-hidden="true"
				/>
			</span>
		</button>
	);
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="w-full bg-gray-800 text-gray-100 body-font ">
			{/* :DESKTOP MENU */}
			<div className="container mx-auto relative flex justify-between md:justify-center items-center py-9 md:py-4 px-5">
				{/* ::Burger icon standard */}
				<BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
				{/* ::Navbar left part */}
				<nav className="hidden md:flex flex-shrink-0 items-center md:justify-start text-base">
					<NavItem link="#link" subtitle="You need">
						Solutions
					</NavItem>
					<NavItem link="#link" subtitle="You'll like">
						Prices
					</NavItem>
				</nav>
				{/* ::Site logo and Name */}
				<a
					href="#link"
					className="mr-2 lg:mr-8 lg:ml-2 flex flex-shrink-0 justify-center font-medium items-center text-gray-800 md:mb-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-10 h-10 text-white p-2 bg-gradient-to-br from-red-400 to-red-200 rounded-full"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						/>
					</svg>
					<span className="ml-3 text-xl text-gray-100 font-semibold antialiased">
						Navbar 16
					</span>
				</a>
				{/* ::Navbar rigth part */}
				<nav className="hidden md:flex flex-shrink-0 items-center md:justify-start text-base">
					<NavItem link="#link" subtitle="Us & more">
						About
					</NavItem>
					<NavItem link="#link" subtitle="For help">
						Contact
					</NavItem>
				</nav>
				{/* ::Avatar */}
				<div className="hidden sm:block md:absolute right-5 cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
			</div>

			{/* :MOBILE MENU */}
			{isOpen && (
				<div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-800 text-center font-semibold text-base uppercase">
					<a
						href="#link"
						className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-red-400"
					>
						Solutions
					</a>
					<a
						href="#link"
						className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-red-400"
					>
						Prices
					</a>
					<a
						href="#link"
						className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-red-400"
					>
						About
					</a>
					<a
						href="#link"
						className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-red-400"
					>
						Contact
					</a>
				</div>
			)}
		</header>
	);
};

export default Navbar;
