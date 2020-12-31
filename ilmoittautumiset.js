import { Component } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";


const tableTitle ="Ilmotaudu killan tapahtumaan"


class ilmoittautumiset extends Component{

    state = {
        characters: [
            {Accountnimi: "testiacount", Hahmo: 'Testi', Hahmoluokka: 'Templar', Rooli: 'Dps'},
            {Accountnimi: "testiacount2", Hahmo: 'Testi2', Hahmoluokka: 'Templar', Rooli: 'Tank'}
        ]
    }

    removeCharacter = (index) => {
        const {characters} = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }

      handleSubmit = (formState) => {
          const {characters} = this.state;
          characters.push(formState);

          this.setState({
              characters: characters
          })

      }

    render(){
        return(
            <div className="container">
            <h1>{tableTitle}</h1>
           
            <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
            <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default ilmoittautumiset;