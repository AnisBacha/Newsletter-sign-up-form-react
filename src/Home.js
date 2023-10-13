
import Header from './Header';
import Subscribe from "./Subscribe";

const Home = ({userEmail, setUserEmail, navigate}) => {
    
    return (
        <div className='home'>
            <Header />
            <Subscribe userEmail={userEmail} setUserEmail={setUserEmail} navigate={navigate}/>
        </div>
    )
}

export default Home
