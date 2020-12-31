import { Component } from "react";

class Form extends Component{

    initialState = {

        Accountnimi: '',
        Hahmo: '',
        Hahmoluokka: '',
        Rooli: ''
    }

    state= this.initialState

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
      }

      submitForm = () => {
          this.props.handleSubmit(this.state);
          this.setState(this.initialState);
      }

    render() {
        const{Accountnimi, Hahmo, Hahmoluokka, Rooli} = this.state;

        return(
            <form>
                <label>Accountnimi</label>
                <input type="text" name="Accountnimi" id="Accountnimi" value={Accountnimi} onChange={this.handleChange}/>
                <label>Hahmo</label>
                <input type="text" name="Hahmo" id="Hahmo" value={Hahmo} onChange={this.handleChange}/>
                <label>Hahmoluokka</label>
                <input type="text" name="Hahmoluokka" id="Hahmoluokka" value={Hahmoluokka} onChange={this.handleChange}/>
                <label>Rooli</label>
                <input type="text" name="Rooli" id="Rooli" value={Rooli} onChange={this.handleChange}/>
                <input type="button" value="Sumbit" onClick={this.submitForm}/>
            </form>
        )
    }

}
export default Form;