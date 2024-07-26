import { useEffect,useState } from "react";
import "./searchBar_.css";
import axios from "axios";
function Search({result}){
    const [text,setText] = useState("");
return(
    <div className="search">
                <input  className="search_children" type="text" placeholder="eg.Kanpur" onChange={(e) =>setText(e.target.value)}/>
                <button className="search_children" onClick={() => {
                                                                    if(text!='')
                                                                            result(text.toLowerCase())}} >Search
                </button>  
    </div>
    
)
}
export default Search