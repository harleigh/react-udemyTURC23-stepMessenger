import { messages } from "../messageData"

export function Numbers ({currentStep}) {

    //the current step and all previous will always be "active"
    const generateSteps = () => {
        return messages.map( (_, idx) => {
            const classType = (idx <= currentStep? "active":"")
            return ( <div className={classType}
                          key={crypto.randomUUID()}>
                        {idx+1}
                     </div> )           
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