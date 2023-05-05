function Display({ tempValue, tempLevel }) {
    return (
        <div id="app__temp" className={tempLevel}>
            <h1 className="app__temp-title">{tempValue} &#8451;</h1>
        </div>
    );
}

export default Display;