import Dice from "./components/DiceRoller";
import Market from "./components/Market";

export default function GameStart() {

    return (
        <main className='min-h-screen p-24'>
            <Dice />
            <Market />
        </main>
    )
}
