import { Link } from "react-router-dom";

function LandingPage(){
    return(
        <div>
            <h2>LandingPage</h2>
            <Link to='/home'>
                <button>Go!</button>
            </Link>
        </div>
    )
}

export default LandingPage;