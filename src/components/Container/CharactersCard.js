import React from 'react'
import container from './container.css';

function CharactersCard(props) {
    return (
        <div className="characters">
            {/* <div className='card' onClick={props.imgClickHandler}> */}
            <div className='card' onClick={() => props.imgClickHandler(props.id)}>
                <img alt={props.id} src={props.image}></img>
            </div>
        </div>
    )
}

export default CharactersCard;