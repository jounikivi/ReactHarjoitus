import { Component } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

class Table extends Component{
    render(){
        
        
        const characterData  = this.props.characterData;
        const removeCharacter = this.props.removeCharacter;

        return(
            <table>
                <TableHeader/>
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}
export default Table;