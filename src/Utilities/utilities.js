//Funkcija za formatiranje datuma i vremena
export function formatDateTime(dt){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    let d = new Date(dt);
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year= d.getFullYear();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    return `${month} ${date}, ${year} at ${hours}:${minutes}`;
}

export function solConverter(value){
    return `${(value/1000000000).toFixed(2)} SOL`
}

export function cutString(str){
    if(str && typeof str !=='string') return "";
    if(str.length <= 8) return str;
    return `${str.slice(0,4)}...${str.slice(-4)}`; 
}