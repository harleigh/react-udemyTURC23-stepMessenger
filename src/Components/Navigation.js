import { messages } from "../messageData"

export function Navigation ({setCurrentStep}) {

    const previousStep = () => {
        setCurrentStep( (curStep) => {
            return ( curStep-1<0? 0: curStep-1)
        })
    }

    //steps are zero-indexed
    const nextStep = () => {
        setCurrentStep( (curStep) => {
            const lastStep = messages.length-1
            return ( curStep+1>lastStep? lastStep: curStep+1)
        })
    }

    const handleKeyDown = (event) =>{
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        
        if(event.key === "ArrowRight"){
            nextStep()
        }else if(event.key === "ArrowLeft") {
            previousStep()
        }
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    }

    return (
        <>
        <div className="buttons">
            <button onClick={previousStep}
                    onKeyDown={handleKeyDown}>Previous</button>
            <button onClick={nextStep} onKeyDown={handleKeyDown}>Next</button>
        </div>
        </>
    )
}