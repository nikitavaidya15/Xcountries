import { useEffect, useState } from "react";

const Card = ({name, flag, abbr }) => {   
    return(
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            border: "1px solid gray",
            borderRadius: "4px",
            height:"200px",
            width:"200px",
            textAlign:"center",
        }}
    >
        <img src={flag} 
        alt={'Flag of ${abbr}'}
        style={{height: "100px", width: "100px"}}
        />
        <h2>{name}</h2>
        </div>
    );
};

const API = "https://xcountries-backend.azurewebsites.net/all"
export default function countries() {
    let temp =[0,1,2,3,4,5,6,7]
    const [countryData, setCountryData] = useState([]) 

    useEffect(()=>{

        fetch(API)
        .then(response => response.json())
        .then(data => setCountryData(data))
        .catch(error => console.error("Error fetching data:" + error));
    },[])


    return (
        <div style={{display: "flex", flexWrap:"wrap", gap:"10px"}}>
        {countryData.map(({name, flag , abbr}) => (
            <Card name={name} flag={flag} abbr={abbr} key={abbr + name} />
        ))}
        </div>
    );
}