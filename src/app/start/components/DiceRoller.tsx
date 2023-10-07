'use client'
import { useState } from 'react'
import './Dice.css'

export default function Dice() {
    const [x, setX] = useState(-45);
    const [y, setY] = useState(-45);
    const [diceResult, setDiceResult] = useState<number[]>([]);
    const diceStyle = {
        transform: `translateZ(-50px) rotateY(${x}deg) rotateX(${y}deg)`,
        height: '100px',
        width: '100px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 1s'
    }

    const spinDice = () => {
        let rnd = Math.floor(Math.random() * 6 + 1);
        switch (rnd) {
            case 1:
                setX(720);
                setY(810);
                break;
            case 6:
                setX(720);
                setY(990);
                break;
            default:
                setX(720 + (6 - rnd) * 90);
                setY(900);
                break;
        }
        return rnd
    }

    const spinBothDice = () => {
        setDiceResult([spinDice(), spinDice()])
    }

    return (
        <div>
            <div className="panel">
                <div className="dice" style={diceStyle}>
                    <div className="side one">
                        <span className="dot"></span>
                    </div>
                    <div className="side two">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="side three">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="side four">
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                    <div className="side five">
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                    <div className="side six">
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom">
                <p>You rolled: {`${diceResult.join(' and ')} => ${diceResult.length ? diceResult.reduce((a = 0, c = 0) => (a || 0) + (c || 0)) : ''}`}</p>
                <button type='button' id="spin" onClick={() => setDiceResult([spinDice()])}>Spin 1 Dice</button>
                <button type='button' id="spin" onClick={spinBothDice}>Spin 2 Dice</button>
            </div>
        </div>
    )
}
