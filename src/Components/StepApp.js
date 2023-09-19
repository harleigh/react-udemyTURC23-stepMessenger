/* Project based on "steps" project from TURC23 */
import { useState } from "react"
import { Numbers } from "./Numbers";
import { DisplayMessage } from "./DisplayMessage";

export default function  StepApp() {
    const [currentStep, setCurrentStep] = useState(0);


    return (
        <>
        <div className="stepsApp">
            <Numbers currentStep={currentStep}/>
            <DisplayMessage currentStep={currentStep}/>
        </div>
        </>
    )
}