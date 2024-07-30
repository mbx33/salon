import React, { useEffect, useState } from "react";
// import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline'

const LogoCloud = () => {
	const partners = [
		{
			name: "Google",
			logo: "https://fancytailwind.com/static/google-full-black-26e70f93bf2cb3c4f893afd587bc89b2.png",
		},
		{
			name: "Lakmé",
			logo: "https://fancytailwind.com/static/lakme-india-logo-adf43af8e6a280ceb9cefef027ccd2f0.png",
		},
		{
			name: "Telcel",
			logo: "https://fancytailwind.com/static/telcel-mexico-logo-da841581e10b22dfe30d0ca49de8679a.png",
		},
	];

	const [position, setPosition] = useState(0);

	return (
		<div className="mx-auto px-4 w-full max-w-7xl ">
			<div className="flex flex-col items-center">
				{/* :TITLE CONTAINER */}
				{/* <div className="">
					<h2 className="flex items-center text-center text-xl sm:text-2xl font-semibold uppercase">
						<span className="mr-3 w-10 h-0.5 rounded-3xl bg-green-500" />
						Our partners
						<span className="ml-3 w-10 h-0.5 rounded-3xl bg-green-500" />
					</h2>
				</div> */}

				{/* :PARTNERS CONTAINER */}
				<div className="mt-5 w-full flex flex-wrap sm:flex-nowrap justify-center items-center sm:space-x-5">
					{/* ::Testimonial slider */}
					<div className="order-1 sm:order-2 mx-auto w-full sm:max-w-md md:max-w-6xl overflow-hidden">
						<ul
							id="slider-logos9"
							className="w-full flex transition-all duration-500 ease-in"
						>
							{[...partners, ...partners].map((brand) => (
								<li
									key={brand.name}
									className="flex-shrink-0 py-5 sm:px-4 w-1/2 sm:w-1/3 lg:w-1/5"
								>
									<div className="flex justify-center items-center">
										<img
											src={brand.logo}
											alt=""
											className="max-h-8 sm:max-h-10"
											style={{
												filter:
													"invert(10%) sepia(24%) saturate(100%) hue-rotate(179deg) brightness(96%) contrast(88%)",
											}}
										/>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogoCloud;
