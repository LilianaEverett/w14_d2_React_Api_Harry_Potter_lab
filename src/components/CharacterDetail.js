import React from 'react';

const CharacterDetail = ({character}) => {

    // const {wood, core, length} = character.wand; 

    return (
        <div>
            <h3>{character.name}</h3>
            <h4>{character.actor}</h4>
            <h4>{character.house}</h4>
            {character.wand && <h4>Wand wood: {character.wand.wood}</h4>}
            <h4>{character.patronus}</h4>
            <img src={character.image}/>

        </div>
    )

}

export default CharacterDetail;