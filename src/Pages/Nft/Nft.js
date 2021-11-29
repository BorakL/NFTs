import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { FaGlobeAfrica } from 'react-icons/fa';
import { GiFlyingFlag } from 'react-icons/gi';
import {useNavigate, useParams } from 'react-router';
import License from '../../Components/Others/License';
import Spiner from '../../Components/Others/Spinner';
import { getByMint } from '../../Services/services';
import { cutString, formatDateTime, solConverter } from '../../Utilities/utilities';
import './Nft.css';

function Nft(){
    let{mint}=useParams();
    const[nft,setNft] = useState({});
    const[loading,setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        (async function fetchByMint(mint){
            try{
                setLoading(true)
                let result = await getByMint(mint);
                result.data ? setNft(result.data) : navigate("/"); 
                setLoading(false)
            }
            catch(e){
                console.log("Error",e);
                navigate("/");
            }
        })(mint)
    },[]); 

    const isSetImg = nft && nft.Properties && nft.Properties.files && nft.Properties.files[0] && nft.Properties.files[0].uri;

    return(
        loading ? <Spiner/> : 
        <main>
            <div className="container nft">
                <div className="column">
                    <div className="image-container">
                        <img src={isSetImg && nft.Properties.files[0].uri} alt="nft"/>
                    </div>
                    <div className="attributes-container">
                        {nft.Properties && nft.Properties.attributes && nft.Properties.attributes.length>0 &&
                        nft.Properties.attributes.map((a,i)=>
                            <div key={i}>
                            {a.trait_type && <div>{a.trait_type}</div>}
                            {a.value && <div>{a.value}</div>}
                            </div>    
                        )
                        }
                    </div>
                </div>
                <div className="column">
                    <div className="info-container">
                        <div className="likes">
                            <div><AiOutlineEye/> {nft.views}</div>
                            <div className="pinkColor"><AiOutlineHeart/> {nft.liked}</div>
                        </div>
                        <h3>Creator</h3>
                        <div className="creator">
                            <div>{cutString(nft.sellerKey)}</div>
                            {
                                nft.Creators.length>1 &&
                                <div>+ {nft.Creators.length-1} Creators</div>
                            } 
                        </div>
                        <h1>{nft.Title}</h1>
                        <div className="license">
                            <License licenseTitle={nft.LicenseTitle ? nft.LicenseTitle : false}/> 
                        </div>
                        
                        <div className="collection"><b>Not Part of a Collection</b></div>
                        <div className="links">
                            <div><AiOutlineShareAlt/> Share</div>
                            <div><FaGlobeAfrica/> View on Solana</div>
                            <div><GiFlyingFlag/> Report as fake</div>
                        </div>

                    </div>
                    <div className="price-container">
                        <div className="sellerKey"><b>Listed by:</b> <span>{nft.sellerKey}</span></div>
                        <div className="price">{solConverter(nft.price)}</div>
                        <p>Creator royalties on secondary sales: 3 %</p>
                        <button>Connect Your Wallet</button>
                        <p>Double-check everything before you buy! How to spot fakes?
                        <br/>Read our Terms and Conditions before you buy!</p>
                    </div> 
                    <div className="history-container">
                        <h3>History</h3><br/>
                        <p>Created at: {formatDateTime(nft.createdAt)}</p>
                    </div>
                </div>
            </div> 
        </main>
    )
}

export default Nft;