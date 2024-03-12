import { useEffect, useState } from "react";

const GovtID = ({url}) =>{
    const [imageData, setImageData] = useState();
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => { 
            setImageData(data); 
          })
          .then((err) => console.log(err));
      }, []);
    return (
        <>
        {/* { console.log(imageData?.image?.data) */}
         {imageData &&
             (<button style = {{backgroundColor : '#007BFF', color : 'white', border : 'none'  }} ><a style = {{color : 'white'}} target = '_blank' href={imageData?.image?.data}>View</a></button>)
        } 
        
        </>
    )
}
export default GovtID;