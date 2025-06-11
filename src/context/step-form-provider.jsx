import { createContext, useContext, useState } from "react";

const InitialValues = {
	currentStep: 1,
	setCurrentStep: () => {},
};

const AuthContext = createContext(InitialValues);

export const StepFormContextProvider = ({ children }) => {
	const [currentStep, setCurrentStep] = useState(InitialValues.currentStep);

	const values = {
		currentStep,
		setCurrentStep,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStepForm = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error(
			"useStepForm must be used within StepFormContextProvider"
		);
	}

	return context;
};
