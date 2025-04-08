import { useEffect, useState } from "react";

 

const Categor = () => {
const [Category, setCategory]= useState([])
useEffect(()=>{
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then(res=>res.json())
.then(data=>setCategory(data.categories))
},[])
console.log(Category);

    return (
        <div>
            {
               Category.map(catt=><button>{catt.strCategory}</button>) 
            }
        </div>
    );
};

export default Categor;