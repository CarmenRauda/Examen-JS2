import getData from "./getData.js";

const showData = async () => {
    const data = await getData();
    const div = document.getElementById("container");

    data.forEach(e => {
        let pe = document.createElement("p");
        pe.innerHTML = e.name;
        div.appendChild(pe);
    });
}

export default showData;