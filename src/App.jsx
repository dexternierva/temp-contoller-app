import { useState, useEffect } from "react";
import "./App.css";

import Display from "./components/Display";
import Controls from "./components/Controls";

function App() {
    const [tempValue, setTempValue] = useState(0);
    const [tempLevel, setTempLevel] = useState("");

    const handleDecTemp = () => {
        if ( tempValue == -129) {
            return tempValue;
        } else {
            setTempValue(tempValue - 1);
        }
    };

    const handleIncTemp = () => {
        if (tempValue == 60) {
            return tempValue;
        } else {
            setTempValue(tempValue + 1);
        }
    };

    useEffect(() => {
        switch (true) {
            case tempValue < 15:
                setTempLevel("cold");
                break;
            case tempValue < 20:
                setTempLevel("cool");
                break;
            case tempValue < 26:
                setTempLevel("moderate");
                break;
            case tempValue < 32:
                setTempLevel("warm");
                break;
            default:
                setTempLevel("hot");
                break;
        }
    }, [tempValue]);

    return (
        <div className="app">
            <Display tempValue={tempValue} tempLevel={tempLevel} />
            <Controls onDecrement={handleDecTemp} onIncrement={handleIncTemp} />
        </div>
    );
}

export default App;
