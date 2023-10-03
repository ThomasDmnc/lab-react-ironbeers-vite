import { Link } from "react-router-dom";

function HomePage() {

    return(
        <>
        <Link to="/beers" >
            <div className="card">
                <img src="./src/assets/beers.png" alt="" />
                <h4>All beers</h4>
                <p>Blalalalalalalalal</p>
            </div>
        </Link>
        <Link to="/random-beer">
            <div className="card">
                <img src="./src/assets/random-beer.png" alt="" />
                <h4>Random Beer</h4>
                <p>Blalalalalalalalal</p>
            </div>
        </Link>
        <Link to="/new-beer">
             <div className="card">
                <img src="./src/assets/new-beer.png" alt="" />
                <h4>New Beer</h4>
                <p>Blalalalalalalalal</p>
            </div>
        </Link>
        </>
    )    
}

export default HomePage;

