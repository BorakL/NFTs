import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { listAll, listByTitle } from "../../Services/services"; 

function Explore(){ 
    const[nfts, setNfts] = useState([]);
    const[skip, setSkip] = useState(0);
    const[hasMore, setHasMore] = useState(true); 
    const[title,setTitle] = useState(""); 

    useEffect(()=>{  
        (title==="" && skip===0) && setNfts([]);
        title ? fetchSearchResults(title) : fetchAll(skip);
    }, [skip,title] )
 

    async function fetchAll(s){  
        let results = await listAll(s); 
        setHasMore(nfts.length<results.data.total)
        setNfts(prevNfts => {
            return [...new Set([...prevNfts, ...results.data.data])]
        })
    }

 
    async function fetchSearchResults(t){
        let results = await listByTitle(t); 
        setNfts(results.data.data)
        setHasMore(nfts.length<results.data.total)
        setSkip(0)
    }
     

    return(
        <>  
            <Header setTitle={setTitle}/>   
            <Main 
                nfts={nfts} 
                skip={skip}
                setSkip={setSkip}
                hasMore={hasMore}  
                title={title}
            />  
        </>
    )
}

export default Explore;