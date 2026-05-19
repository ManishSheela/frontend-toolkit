import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";

import {
	StepFormContextProvider,
	useStepForm,
} from "@/src/context/step-form-provider";

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
		<div className="w-full m-auto p-8 bg-white rounded-lg shadow-md">
			<h2 className="text-xl font-semibold text-gray-700">Multi Step Form</h2>

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
					<label className="block text-sm font-medium text-gray-700">
						First Name<span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						className="mt-1 mb-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.firstName}
						name="firstName"
						onChange={handleUserData}
					/>

					<label className="block text-sm font-medium text-gray-700">
						Last Name
					</label>
					<input
						type="text"
						className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.lastName}
						name="lastName"
						onChange={handleUserData}
					/>
				</div>
			)}

			{currentStep === 1 && (
				<div className="w-full flex flex-col justify-start items-start">
					<label className="block text-sm font-medium text-gray-700">
						Username<span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						className="mt-1 mb-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.username}
						name="username"
						onChange={handleUserData}
					/>

					<label className="block text-sm font-medium text-gray-700">
						Email<span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.email}
						name="email"
						onChange={handleUserData}
					/>
				</div>
			)}

			{currentStep === 2 && (
				<div className="w-full flex flex-col justify-start items-start">
					<label className="block text-sm font-medium text-gray-700">
						Password<span className="text-red-500">*</span>
					</label>
					<input
						type="password"
						className="mt-1 mb-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.password}
						name="password"
						onChange={handleUserData}
					/>

					<label className="block text-sm font-medium text-gray-700">
						Confirm Password<span className="text-red-500">*</span>
					</label>
					<input
						type="password"
						className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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

			<CodeDisplay codeString={codeString} />
		</>
	);
};

export default MultiStepForm;



const codeString = `
import { createContext, useContext, useState } from "react";

const InitialValues = {
	currentStep: 0,
	setCurrentStep: () => {},
	userData: {
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	},
	setUserData: () => {},
};

const StepFormContext = createContext(null);

export const StepFormContextProvider = ({ children }) => {
	const [currentStep, setCurrentStep] = useState(InitialValues.currentStep);
	const [userData, setUserData] = useState(InitialValues.userData);

	const values = {
		currentStep,
		setCurrentStep,
		userData,
		setUserData,
	};

	return (
		<StepFormContext.Provider value={values}>
			{children}
		</StepFormContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStepForm = () => {
	const context = useContext(StepFormContext);

	if (!context) {
		throw new Error("useStepForm must be used within StepFormContextProvider");
	}

	return context;
};


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
		<div className="w-full m-auto p-8 bg-white rounded-lg shadow-md">
			<h2 className="text-xl font-semibold text-gray-700">Multi Step Form</h2>

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
					<label className="block text-sm font-medium text-gray-700">
						First Name<span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						className="mt-1 mb-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.firstName}
						name="firstName"
						onChange={handleUserData}
					/>

					<label className="block text-sm font-medium text-gray-700">
						Last Name
					</label>
					<input
						type="text"
						className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.lastName}
						name="lastName"
						onChange={handleUserData}
					/>
				</div>
			)}

			{currentStep === 1 && (
				<div className="w-full flex flex-col justify-start items-start">
					<label className="block text-sm font-medium text-gray-700">
						Username<span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						className="mt-1 mb-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.username}
						name="username"
						onChange={handleUserData}
					/>

					<label className="block text-sm font-medium text-gray-700">
						Email<span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.email}
						name="email"
						onChange={handleUserData}
					/>
				</div>
			)}

			{currentStep === 2 && (
				<div className="w-full flex flex-col justify-start items-start">
					<label className="block text-sm font-medium text-gray-700">
						Password<span className="text-red-500">*</span>
					</label>
					<input
						type="password"
						className="mt-1 mb-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						value={userData.password}
						name="password"
						onChange={handleUserData}
					/>

					<label className="block text-sm font-medium text-gray-700">
						Confirm Password<span className="text-red-500">*</span>
					</label>
					<input
						type="password"
						className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
					className={\`bg-primary text-white \${
						isNextButtonDisabled() ? "cursor-not-allowed opacity-70" : ""
					}\`}
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

				<StepFormContextProvider>
					<StepForm />
				</StepFormContextProvider>
		</>
	);
};

export default MultiStepForm;
`;
