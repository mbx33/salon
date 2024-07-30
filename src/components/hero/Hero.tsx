const profileImg = {
	src: "/src/assets/profile.jpg",
	alt: "Profile Image",
};

const Hero = () => {
	return (
		<div className="relative w-full h-full bg-pink-500">
			{/* :NAVIGATION */}
			<div className="relative w-full h-20">
				<h1 className="absolute lg:right-2/3 px-3 md:w-64 h-full inline-flex flex-col justify-center items-center bg-black bg-opacity-80 text-center text-xl sm:text-2xl md:text-3xl text-white font-serif">
					Sveta's <br />
					<span className="text-pink-500 text-opacity-80">Nails</span>
				</h1>
			</div>

			{/* :HERO MAIN CONTAINER */}
			<div className="relative w-full h-screen max-h-615px">
				{/* ::Hero Image */}
				<img
					src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt=""
					className="absolute w-full h-full object-top object-cover"
				/>

				{/* ::Hero Banner */}
				<div className="z-10 absolute top-0 lg:right-2/3 w-full md:w-64 h-1/4 sm:h-1/3 md:h-full flex flex-row-reverse md:flex-col bg-black bg-opacity-80 shadow transition-transform duration-500">
					{/* Hero Product Categories */}
					<ul className="p-5 w-full h-full md:h-1/2 grid grid-cols-6 text-center md:text-left text-gray-300 text-sm tracking-wider uppercase">
						<li className="col-span-2 sm:col-span-3 md:col-span-6 py-1 px-2 w-full inline-flex items-center rounded hover:bg-pink-500 hover:bg-opacity-20">
							<a href="#link" className="w-full">
								Jacket
							</a>
						</li>
						<li className="col-span-2 sm:col-span-3 md:col-span-6 py-1 px-2 w-full inline-flex items-center rounded hover:bg-pink-500 hover:bg-opacity-20">
							<a href="#link" className="w-full">
								Jeans
							</a>
						</li>
						<li className="col-span-2 sm:col-span-3 md:col-span-6 py-1 px-2 w-full inline-flex items-center rounded hover:bg-pink-500 hover:bg-opacity-20">
							<a href="#link" className="w-full">
								Sandals
							</a>
						</li>
						<li className="col-span-3 sm:col-span-3 md:col-span-6 py-1 px-2 w-full inline-flex items-center rounded hover:bg-pink-500 hover:bg-opacity-20">
							<a href="#link" className="w-full">
								Pullover
							</a>
						</li>
						<li className="col-span-3 sm:col-span-3 md:col-span-6 py-1 px-2 w-full inline-flex items-center rounded hover:bg-pink-500 hover:bg-opacity-20">
							<a href="#link" className="w-full">
								Handbag
							</a>
						</li>
						<li className="col-span-3 sm:col-span-3 md:col-span-6 py-1 px-2 w-full inline-flex items-center rounded hover:bg-pink-500 hover:bg-opacity-20">
							<a href="#link" className="w-full">
								Sneakers
							</a>
						</li>
						<li className="col-span-3 sm:col-span-3 md:col-span-6 py-1 px-2 w-full inline-flex items-center rounded hover:bg-pink-500 hover:bg-opacity-20">
							<a href="#link" className="w-full">
								Perfums
							</a>
						</li>
					</ul>
					{/* Banner Image */}
					<div className="hidden sm:block relative w-full h-full md:h-1/2">
						<img
							src={profileImg.src}
							alt={profileImg.alt}
							className="absolute w-full h-full object-cover border-4 border-black border-opacity-70"
						/>
					</div>
				</div>

				{/* ::Hero Titles */}
				<h2
					className="absolute bottom-20 left-1/2 md:left-1/3 lg:left-1/3 text-8xl sm:text-9xl lg:text-10xl text-white font-black font-serif transform -translate-x-1/2 md:translate-x-0"
					style={{ textShadow: "0 0 2px gray" }}
				>
					Svetas
				</h2>
				<h2 className="absolute bottom-60 left-1/2 text-8xl sm:text-9xl lg:text-10xl text-pink-500 text-opacity-80 font-serif transform -rotate-90 -translate-x-1/2">
					Nails
				</h2>

				{/* ::Social Medias */}
				<div className="absolute bottom-0 lg:bottom-5 right-1/2 md:right-0 lg:right-2 mx-2 flex flex-row lg:flex-col items-center text-yellow-600 text-opacity-80 transform translate-x-1/2 md:translate-x-0">
					{/* Twitter */}
					<a href="#link" className="mx-2 lg:mx-0 my-3 transform hover:scale-110">
						<svg
							className="w-8 h-8"
							fill="currentColor"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
						</svg>
					</a>
					{/* Linkedin */}
					<a href="#link" className="mx-2 lg:mx-0 my-3 transform hover:scale-110">
						<svg
							className="w-8 h-8"
							fill="currentColor"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
					</a>
					{/* Google + */}
					<a href="#link" className="mx-2 lg:mx-0 my-3 transform hover:scale-110">
						<svg
							className="w-8 h-8"
							fill="currentColor"
							enableBackground="new 0 0 24 24"
							height="512"
							viewBox="0 0 24 24"
							width="512"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z" />
							<path d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
