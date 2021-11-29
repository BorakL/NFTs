import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spiner from '../../../../Components/Others/Spinner';
import Card from '../Card/Card';
import './Main.css';


function Main(props){  
    
    let nfts,setSkip,hasMore,title;
    ({nfts,setSkip,hasMore,title} = {...props})   

    const results = nfts.map(n=><Card nft={n} key={n._id}/>);

    return(
        <div className="container main"> 
                <InfiniteScroll
                dataLength={nfts.length}
                next={()=>{setSkip(prev=>prev+20)}}
                hasMore={hasMore}
                loader={<Spiner/>}
                endMessage={nfts.length>10 && <p> <b>Back to top</b> </p>}> 
                    {(title && results.length===0) ? <h3 style={{textAlign:'center'}}>No items</h3> : <div className="grid">{results}</div>}  
                </InfiniteScroll>
        </div>
    )
}

export default Main;