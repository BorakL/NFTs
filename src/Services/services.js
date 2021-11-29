import axios from "axios";

const baseUrl = 'https://test-api.solsea.io';

export function listAll(skip){
    return axios.get(`${baseUrl}/nft-listed?&$limit=20&$skip=${skip}`)
}

export function listByTitle(title){
    return axios.get(`${baseUrl}/nft-listed?Title=${title}`)
}
 
export function getByMint(mint){
    return axios.get(`${baseUrl}/fetch-nft/${mint}`)
}