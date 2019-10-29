import React, {Component} from 'react';

class HouseSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            houseArray: this.props.characters.map(character => {
                return character.house;
            })
        }
    }

    render() {

        const houseOptions = this.props.characters.map((character, index) => {
            return (
                <option value={index} key={character.name}>{character.name}</option>
            )
        })

        return (
            <div>
                <h3>Select Characters by House:</h3>
                <select onChange={this.handleChange}>
                    {houseOptions}
                </select>
            </div>
        )
    }

}

export default HouseSelector;