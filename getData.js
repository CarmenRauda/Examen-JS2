import url from "./url.js";

async function getData(){
    try{
        const data = await fetch(url);
        if(!data.ok){
            throw new console.error("Error :",data.status);

        }
        let dataJson = await data.json();
        return dataJson.data;

    }catch(error){
        console.log(error.message);
    }
}

getData();

export default getData;