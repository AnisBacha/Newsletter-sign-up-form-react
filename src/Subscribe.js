import { useState } from "react";
const Subscribe = ({userEmail, setUserEmail, navigate}) => {
    const [isValid, setIsValid] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValid === true) navigate('/success');
    }
    
    const handleChange = (e) => {
        const inputEmail = e.target.value;
        setUserEmail(inputEmail);

        const regxEmail = new RegExp(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        const isValidEmail = regxEmail.test(inputEmail);
        setIsValid(isValidEmail);
    }
    return (

        <main>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul>
                <li>
                    <img src={require('./images/icon-list.svg').default}/>
                    <p>Product discovery and building what matters</p>
                </li>
                <li>
                    <img src={require('./images/icon-list.svg').default}/>
                    <p>Measuring to ensure updates are a success</p>
                </li>
                <li>
                <img src={require('./images/icon-list.svg').default}/>
                    <p>And much more!</p>
                </li>
            </ul>
            <form autoComplete="off" method="submit" className="form" onSubmit={handleSubmit}>
                <label>Email address</label>
                {isValid === false && (<p className="wrong-format">Valid email required</p>)}
                <input 
                    type="email" 
                    id="email" 
                    placeholder="email@company.com"
                    value={userEmail}
                    onChange={(e) => handleChange(e)}
                    className={isValid === false ? 'email-valid' : ''}
                />
                <button type="submit">Subscribe to monthly newsletter</button>
            </form>
        </main>
    )
}

export default Subscribe
