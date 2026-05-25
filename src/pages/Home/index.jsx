const Home = () => {
	return (
		<div className="col-span-1 md:col-span-2">
			<div className="w-full max-w-3xl bg-white rounded-lg shadow-sm border border-gray-200 p-6">
				<h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
					Frontend Interview Preparation Toolkit
				</h1>
				<p className="text-gray-600 text-sm md:text-base mb-4">
					Use this workspace to practice real-world frontend interview problems,
					explore machine coding challenges, and sharpen your UI skills.
				</p>
				<div className="grid gap-4 md:grid-cols-2">
					<div className="bg-slate-50 rounded-md p-4 border border-slate-100">
						<h2 className="text-sm font-semibold text-gray-800 mb-2">
							What you can practice
						</h2>
						<ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-1">
							<li>Core JavaScript & polyfills implementations</li>
							<li>Machine coding questions and interactive widgets</li>
							<li>UI challenges with real-world layouts and behavior</li>
						</ul>
					</div>
					<div className="bg-slate-50 rounded-md p-4 border border-slate-100">
						<h2 className="text-sm font-semibold text-gray-800 mb-2">
							Learning resources
						</h2>
						<ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-1">
							<li>Step-by-step code examples alongside each feature</li>
							<li>Hands-on exercises to build muscle memory</li>
							<li>Patterns you can reuse in real interviews</li>
						</ul>
					</div>
				</div>
				<p className="mt-4 text-xs md:text-sm text-gray-500">
					Use the left sidebar to explore machine coding problems and polyfill
					implementations. Each example includes a working demo and the
					underlying source code.
				</p>
				<div className="mt-6 flex flex-col md:flex-row items-center gap-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
					<div className="flex-1 text-center md:text-left">
						<h3 className="text-sm font-semibold text-primary mb-1">
							Enjoying this toolkit?
						</h3>
						<p className="text-xs text-primary">
							Give it a star on GitHub and share your feedback to help improve
							the project!
						</p>
					</div>
					<a
						href="https://github.com/ManishSheela/frontend-toolkit"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap shadow-sm"
					>
						⭐ Star on GitHub
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
