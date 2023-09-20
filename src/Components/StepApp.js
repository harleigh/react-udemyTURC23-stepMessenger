/* Project based on "steps" project from TURC23 */
import { useState } from "react"
import { Numbers } from "./Numbers";
import { DisplayMessage } from "./DisplayMessage";
import { Navigation } from "./Navigation";

export default function  StepApp() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
      setIsVisible( curVisibility => !curVisibility)
    }

    const displayApp = () => {
      return (
        <div className="stepsApp">
            <Numbers currentStep={currentStep}/>
            <DisplayMessage currentStep={currentStep}/>
            <Navigation setCurrentStep={setCurrentStep}/>
        </div>
      )
    }

    return (
        <>
        <button className = "close" onClick={toggleVisibility}>&times;</button>
        {isVisible && displayApp()}
        </>
    )
}
