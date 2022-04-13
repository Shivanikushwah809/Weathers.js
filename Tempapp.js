import React, { useEffect, useState } from 'react'
import "./css/style.css";


function Tempapp() {
    const [city , setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async () =>{
            const url = "";
            const response = await fetch(url)
        }
        fetchApi();

    })
    return (
        <>
         <div className='box'>
                <div className='inputData'>
                    <input type="search"
                        className='inputFeild'
                        onChange={(event) => {

                        }}
                    />

                </div>
            
            <div className='info'>
                <h2 className='location'>
                    <i className="fas fa-street-view"></i>Pune
                </h2>
                <h1 className='temp'>
                    5.25 degcel

                </h1>
                <h3 className='tempmin_max'>min : 5.25degcel |  max : 2.52degcel</h3>
            </div>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>

        </div>

        </>
    )
}

export default Tempapp