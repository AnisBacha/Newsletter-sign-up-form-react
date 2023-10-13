import React from "react"
const Success = ({userEmail, navigate}) => {
    
    return (
        <main className="main__success">
            <img src={require("./images/icon-success.svg").default}/>
            <div>
                
            </div>
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <strong>{userEmail}</strong>. Please open it and click the button inside to confirm your subscription</p>

            <button onClick={() => navigate('/')}>Dismiss message</button>
        </main>
    )
}

export default Success
