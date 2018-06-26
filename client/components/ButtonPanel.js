import React, { Component } from 'react';

const ButtonPanel = (props) => {
    const { phase, startGame } = this.props;
    switch (phase) {
        case '0':
            return (
                <div className='col-12'>
                    <div className='flexContainer'>
                        <button type='button' className='btn btn-dark' onClick={startGame}>
                            Start Game
                        </button>
                    </div>
                </div>
            );
        case '1':
            return (
                <div className='col-12'>
                    <div className='flexContainer'>
                        <button type='button' className='btn btn-primary' onClick={game.knockKnock}>
                            Kick Door
                        </button>
                    </div>
                </div>
            )
    }
    // return (
    //     <div className='col-12'>
    //         <div className='flexContainer'>
    //             <button type='button' className='btn btn-primary' onClick={game.knockKnock}>
    //                 Kick Door
    //             </button>
    //             <button type='button' className='btn btn-danger' onClick={() => { log(playerOrder) }}>
    //                 Fight Monster
    //             </button>
    //             <button type='button' className='btn btn-success' onClick={game.drawTreasure}>
    //                 Draw Treasure
    //             </button>
    //             <button type='button' className='btn btn-warning' onClick={logHand}>
    //                 Run
    //             </button>
    //             <button type='button' className='btn btn-secondary' onClick={game.lootRoom}>
    //                 Loot Room
    //             </button>
    //             <button type='button' className='btn btn-info' onClick={game.endTurn}>
    //                 End Turn
    //             </button>
    //             <button type='button' className='btn btn-dark' onClick={this.startGame}>
    //                 Start Game
    //             </button>
    //         </div>
    //     </div>
    // );
}