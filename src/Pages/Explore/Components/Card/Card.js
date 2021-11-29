import React from "react"; 
import {TiStarburst} from 'react-icons/ti';
import {RiFirefoxFill} from 'react-icons/ri';
import {AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'; 
import { formatDateTime, solConverter } from "../../../../Utilities/utilities";
import { Link } from "react-router-dom";

function Card({nft}){ 
    let Title,liked,price,Properties,createdAt,LicenseTitle,views,Mint; 
    ({Title,liked,price,Properties,createdAt,LicenseTitle,views,Mint} = {...nft}); 

    const isSetImg = Properties && Properties.files && Properties.files[0] && Properties.files[0].uri;
    
    return(

        <div className="card">
            <div className="card-header">
                <h3>{Title}</h3>
                <div>{formatDateTime(createdAt)}</div>
            </div>
            
            <div className="card-img">
                <Link to={`/nft/${Mint}`}><img src={ (isSetImg && Properties.files[0].uri)} alt="nft" title={Title}/></Link>
            </div>

            <div className="card-info">
                <div className="price">{solConverter(price)}</div>

                <div className="otherInfo"> 
                    <div className="license">
                        { typeof LicenseTitle !== "undefined" &&
                        <>
                        {LicenseTitle!=="" && <div className="badge"><TiStarburst/> {LicenseTitle}</div> }
                        <div className="minted"><RiFirefoxFill/> Minted on Solsea</div>
                        </>
                        }
                    </div>
                    <div className="likes">
                        <div><AiOutlineEye/>{views}</div>
                        <div className="pinkColor"><AiOutlineHeart/>{liked}</div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Card;