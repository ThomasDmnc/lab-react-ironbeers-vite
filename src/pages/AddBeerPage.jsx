import { useState } from "react"
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    const [name , setName] = useState('');
    const [tagline , setTagline] = useState('');
    const [description , setDescription] = useState('');
    const [first_brewed , setFirstBrewed] = useState('');
    const [attenuation_level , setAttenuationLevel] = useState(0);
    const [contributed_by , setContributedBy] = useState('');


  const navigate = useNavigate();

    const onSubmit = async event =>{
        event.preventDefault()
        const payload = {name, tagline, description, first_brewed, attenuation_level, contributed_by};

        try {
            const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new',
            {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json',
                }, 
            }
            )
            if (response.ok) {
                // const currentBeer = await response.json()
                navigate('/beers')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form  onSubmit={onSubmit}>
            <label htmlFor="">Name</label>
            <input value={name} type="text" name="name" onChange={(event) => setName(event.target.value) } />

            <label htmlFor="">Tagline</label>
            <input value={tagline} type="text" name="tagline" onChange={(event) => setTagline(event.target.value) } />

            <label htmlFor="">Description</label>
            <textarea value={description} type="text" name="description" onChange={(event) => setDescription(event.target.value) } />

            <label htmlFor="">First Brewed</label>
            <input  value={first_brewed} type="text" name="first_brewed" onChange={(event) => setFirstBrewed(event.target.value) } />

            <label htmlFor="">Attenuation Level</label>
            <input value={attenuation_level} type="number" name="attenuation_level" onChange={(event) => setAttenuationLevel(event.target.value) } />

            <label htmlFor="">Contributed By</label>
            <input value={contributed_by} type="text" name="contributed_by" onChange={(event) => setContributedBy(event.target.value) } />
            <button type="submit">Add Beer</button>
        </form>
    )
}

export default AddBeerPage;
