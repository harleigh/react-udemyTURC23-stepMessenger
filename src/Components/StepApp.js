/* Project based on "steps" project from TURC23 */
import { useState } from "react"
import { Numbers } from "./Numbers";

export default function  StepApp() {
    const [currentStep, setCurrentStep] = useState(0);


    return (
        <>
        <div className="stepsApp">
            <Numbers currentStep={currentStep}/>
        </div>
        </>
    )
}