import { RiFirefoxFill } from "react-icons/ri";
import { TiStarburst } from "react-icons/ti";

export default function License({licenseTitle}){
    return(
        <>
        { typeof licenseTitle !== "undefined" &&
            <>
            <div className="badge"><TiStarburst/> {licenseTitle ? licenseTitle : "None attached"}</div>
            <div className="minted"><RiFirefoxFill/> Minted on Solsea</div>
            </>
        }
        </>
    )
}