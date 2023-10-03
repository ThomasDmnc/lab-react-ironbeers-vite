import { useState, useEffect } from "react";


function RandomBeerPage() {

const [beer, setBeer] = useState();
const [isLoading, setIsLoading] = useState(true);

async function fetchOneBeer() {
    const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
    console.log(response)
    if (response.ok){
        const parsed = await response.json()
        console.log(parsed)
        setBeer(parsed)
        setIsLoading(false);
    }
}


    useEffect(() => {
        fetchOneBeer()
    }, []);


return isLoading ? ( <p>Loading…</p>) :  (
    <>
        <img src={beer.image_url} alt="" />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{beer.attenuation_level}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p> {beer.description}</p>
        <p>Contribution by: {beer.contributed_by}</p>
    </>
)
}

export default RandomBeerPage;
