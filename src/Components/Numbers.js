import { messages } from "../messageData"

export function Numbers ({currentStep}) {

    const generateSteps = () => {
        return messages.map( (_, idx) => {
            return <div>{idx+1}</div>
        })
    }

    return (
        <>
        <div className="numbers">
            {generateSteps()}
        </div>
        </>
    )
}