import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"


 
    
function Static1() {

    const [data, setData] = useState([])
    
        const fetchData = async () => {
            const result = await Axios(
                'http://netdemo.site/infilate/public/api/apps/content', {
                method: "POST"
            }
            );
            let run = result.data.Data
            setData(run)
        }


    useEffect(()=>{
      fetchData()
    }, [])
    console.log(data)

    return (
        <div style={{ paddingTop: "200px", paddingLeft: "200px" }}>
           
            {
                data.map((item) => ((
                    <div>
                       
                        <Link to={`/Static/${item.id}`}>{item.pages}</Link>
                       
                </div>
                ))
                    
                )
       }
     
        </div>
    )
}

export default Static1
