import { messages } from "../messageData"

export function DisplayMessage ({currentStep}) {
    return (
        <>
        <p className="message"> {messages[currentStep]} </p>
        </>
    )
}