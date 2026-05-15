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
