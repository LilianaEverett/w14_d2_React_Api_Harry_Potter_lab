import React, {Component} from 'react';
import CharacterSelector from "../components/CharacterSelector";
import CharacterDetail from "../components/CharacterDetail";

class CharacterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedCharacter: {}
        }

        this.handleSelectedCharacter = this.handleSelectedCharacter.bind(this);
    }

    handleSelectedCharacter(character) {
        this.setState({selectedCharacter: character})
    }

    componentDidMount() {
            fetch("http://hp-api.herokuapp.com/api/characters")
            .then(response => response.json())
            .then(charactersJson => this.setState({data: charactersJson}))
    }

    render() {
        return (
            <React.Fragment>
            <CharacterSelector onCharacterSelect={this.handleSelectedCharacter} characters={this.state.data}/>
            <HouseSelector characters={this.state.data}/>
            <CharacterDetail character={this.state.selectedCharacter}/>
            </React.Fragment>
            
        )
    }

};

export default CharacterContainer;