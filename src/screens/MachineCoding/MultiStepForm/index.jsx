import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PreviewContainer from "@/src/components/PreviewContainer";
import {
	StepFormContextProvider,
	useStepForm,
} from "@/src/context/step-form-provider";

const totalSteps = 3;
const MultiStepForm = () => {
	const { setCurrentStep, currentStep } = useStepForm();

	return (
		<div>
			<StepFormContextProvider>
				<PreviewContainer>
					<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
						<h2 className="text-xl font-semibold text-gray-700">
							Multi Step Form
						</h2>

						{/* Progress Bar */}

						<div className="grid grid-cols-3 gap-3 my-6">
							{Array.from({ length: totalSteps }).map((item, index) => (
								<div
									key={index}
									className={cn(
										" col-span-1 rounded-full h-2",
										currentStep === index + 1 ? "bg-primary" : "bg-platinum"
									)}
								/>
							))}
						</div>

						{/* Step 2 Form */}
						{currentStep === 0 && (
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Password<span className="text-red-500">*</span>
								</label>
								<input
									type="password"
									className="mt-1 mb-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
								/>

								<label className="block text-sm font-medium text-gray-700">
									Confirm Password<span className="text-red-500">*</span>
								</label>
								<input
									type="password"
									className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
								/>
							</div>
						)}

						<div className="flex justify-between items-center mt-6">
							<Button className="bg-primary text-white">Back</Button>
							<Button className="bg-primary text-white" onClick={()=> setCurrentStep(currentStep+1)}>Next</Button>
						</div>
					</div>
				</PreviewContainer>
			</StepFormContextProvider>
		</div>
	);
};

export default MultiStepForm;
