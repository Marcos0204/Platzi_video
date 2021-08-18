import React from 'react'
import '../assets/styles/components/Player.scss';

const Players = () => {
    return (
        <div className='Players'>
            <video controls autoPlay>
                <source src='' type='video/mp4' />
            </video>
            <div className='player-back'>
                <button type='button'>
                    regresar
                </button>
            </div>
        </div>
    )
}

export default Players;