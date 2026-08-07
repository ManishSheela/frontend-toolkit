import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";

import {
	StepFormContextProvider,
	useStepForm,
} from "@/src/context/step-form-provider";
import pageSource from "./index.jsx?raw";

const totalSteps = 3;
const StepForm = () => {
	const { currentStep, setCurrentStep, userData, setUserData } = useStepForm();

	const handleUserData = (e) => {
		setUserData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const isNextButtonDisabled = () => {
		if (currentStep === 0) {
			return !userData.firstName;
		}
		if (currentStep === 1) {
			return !userData.username || !userData.email;
		}
		if (currentStep === 2) {
			return (
				userData.password.length !== userData.confirmPassword.length ||
				!userData.password ||
				!userData.confirmPassword
			);
		}
		return false;
	};
	return (
		<div className="w-full m-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-black/40">
			<h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
				Multi Step Form
			</h2>

			{/* Progress Bar */}

			<div className="grid grid-cols-3 gap-3 my-6">
				{Array.from({ length: totalSteps }).map((item, index) => (
					<div
						key={index}
						className={cn(
							" col-span-1 rounded-full h-2",
							currentStep === index ? "bg-primary" : "bg-platinum",
						)}
					/>
				))}
			</div>

			{/* Step Forms */}
			{currentStep === 0 && (
				<div className="w-full flex flex-col justify-start items-start">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
						First Name<span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						className="mt-1 mb-4 w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.firstName}
						name="firstName"
						onChange={handleUserData}
					/>

					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
						Last Name
					</label>
					<input
						type="text"
						className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.lastName}
						name="lastName"
						onChange={handleUserData}
					/>
				</div>
			)}

			{currentStep === 1 && (
				<div className="w-full flex flex-col justify-start items-start">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
						Username<span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						className="mt-1 mb-4 w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.username}
						name="username"
						onChange={handleUserData}
					/>

					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
						Email<span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.email}
						name="email"
						onChange={handleUserData}
					/>
				</div>
			)}

			{currentStep === 2 && (
				<div className="w-full flex flex-col justify-start items-start">
					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
						Password<span className="text-red-500">*</span>
					</label>
					<input
						type="password"
						className="mt-1 mb-4 w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.password}
						name="password"
						onChange={handleUserData}
					/>

					<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
						Confirm Password<span className="text-red-500">*</span>
					</label>
					<input
						type="password"
						className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.confirmPassword}
						name="confirmPassword"
						onChange={handleUserData}
					/>
				</div>
			)}

			<div className="flex justify-between items-center mt-6">
				<Button
					className="bg-primary text-white"
					onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
				>
					Back
				</Button>

				<Button
					className={`bg-primary text-white ${
						isNextButtonDisabled() ? "cursor-not-allowed opacity-70" : ""
					}`}
					disabled={isNextButtonDisabled()}
					onClick={() => {
						if (currentStep === totalSteps - 1) {
							alert(JSON.stringify(userData));
						} else {
							setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
						}
					}}
				>
					{currentStep === totalSteps - 1 ? "Submit" : "Next"}
				</Button>
			</div>
		</div>
	);
};

const MultiStepForm = () => {
	return (
		<>
			<LearningBox className="gap-4">
				<StepFormContextProvider>
					<StepForm />
				</StepFormContextProvider>
			</LearningBox>

			<CodeDisplay codeString={pageSource} />
		</>
	);
};

export default MultiStepForm;
