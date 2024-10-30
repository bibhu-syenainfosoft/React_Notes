import { useState,useEffect } from "react";

export default function FetchData() {

    const [gett,setGett] = useState({ photos: [] });

    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response=>response.json())
        .then(mapData=>{
            setGett(mapData)
        }).catch(error => console.error("Error fetching data:", error));
    },[])

    return(
        <div className="container-fluid()">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Camera_FullName</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gett.photos.map(mars=>
                            <tr key={mars.id}>
                                <td>{mars.id}</td>
                                 <td>{mars.camera.full_name}</td>
                                <td><img src={mars.img_src} width="100" height="100" /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )

}
