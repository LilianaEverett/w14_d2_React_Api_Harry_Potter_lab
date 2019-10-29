import React, {Component} from 'react';

class CharacterSelector extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const character = this.props.characters[event.target.value]
        this.props.onCharacterSelect(character);
    }

    render () {

        const characterOptions = this.props.characters.map((character, index) => {
            return (
                <option value={index} key={index}>{character.name}</option>
            )
        })

        return (
            <div>
                <h3>Select your Favourite Character:</h3>
                <select onChange={this.handleChange}>
                    {characterOptions}
                </select>
            </div>
            
        )
    }

}

export default CharacterSelector;