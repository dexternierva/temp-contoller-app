import { FaPlus, FaMinus } from "react-icons/fa";

function Controls({ onDecrement, onIncrement }) {
    return (
        <div className="app__controls">
            <button
                className="btn btn--dec"
                onClick={ onDecrement }
            >
                <FaMinus />
            </button>
            <button
                className="btn btn--inc"
                onClick={ onIncrement }
            >
                <FaPlus />
            </button>
        </div>
    );
}

export default Controls;
