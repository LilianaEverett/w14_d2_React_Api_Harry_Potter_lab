import React, {Component} from 'react';

class CharacterSelector extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onCharacterSelect(event.target.value);
    }

    render () {

        const characterOptions = this.props.characters.map(character => {
            return (
                <option value={character} key={character.name}>{character.name}</option>
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