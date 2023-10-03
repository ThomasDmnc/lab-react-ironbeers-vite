import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    async function fetchAllBeers(){
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers`)
        if (response.ok){
            const parsed = await response.json()
            setBeers(parsed)
        }
    }

    useEffect(() => {
        fetchAllBeers()
    }, []);

    
    return(
        <>
        {beers.map( beer => (
            <div className="card" key={beer._id}>
                <Link to={`/beers/${beer._id}`} >
                <img src={beer.image_url} alt="" />
                <h4>{beer.name}</h4>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
                </Link>
            </div>
        ))}
        </>
    )

}

export default AllBeersPage;
