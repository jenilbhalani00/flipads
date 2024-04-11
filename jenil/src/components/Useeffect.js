import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Useeffect = () => {

    const [data, setData] = useState([])
    const [number, setNumber] = useState(0)

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(function (response) {
               
                console.log(response);
                setData(response.data.results)
            })
            .catch(function (error) {
               
                console.log(error);
            })
            .finally(function () {
               
            });
    },[])

    return (
        <div>

            {/* <button onClick={() => setNumber(number + 1)}>incremnet bby 1</button> */}
            {/* {number} */}

            {
                data.map((item)=>{
                    return(
                        <>
                            <img src={item.image} />
                            <h1>{item.name}</h1>
                            <h2>{item.status}</h2>
                            <h3>{item.species}</h3>
                        </>
                    )
                })
            }
            

        </div>
    )
}

export default Useeffect;