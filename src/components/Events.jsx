import React, { useRef, useState } from 'react'

const Events = () => {

    const [count, setCount] = useState(1);
    const [input, setInput] = useState("");
    const [right, setRight] = useState("");
    const [text, setText] = useState("");
    const [capital, setCapital] = useState([]);
    const [white, setWhite] = useState(0);
    const color = useRef();

    const regexCapital = /[A-Z]/g;
    const regexWhite = /\s/g;

    const handleRightClick = (e) => {
        e.target.addEventListener("contextmenu", (event) => {
            setRight("Right Click Detected!")
            event.preventDefault()
        });
    }

    const handleFieldValue = (e) => {
        const updatedText = e.target.value;
        setText(updatedText);
        setCapital(updatedText.match(regexCapital) || []);
        setWhite(updatedText.match(regexWhite) || 0);
    }

    return (
        <>
            <div className='container-fluid'>
                <div className="row mt-5" style={{maxWidth: "100%"}}>
                    <div className="col-12">
                        <h1 className="eventTitle">React Hooks with Events</h1>
                    </div>
                </div>
                <div className='cardContainer d-flex justify-content-around mt-5'>
                    <div className="card">
                        <p className="cardEventTitle">On Click Event</p>
                        <div className="button d-flex justify-content-center">
                            <button className="cardEventButton1" onClick={(e) => {
                                setCount(count + 1)
                                document.getElementById('one').innerHTML = `Button clicked ${count} times!`
                            }}>Display</button>
                        </div>
                        <p id="one" className="cardEventResult"></p>
                    </div>
                    <div className="card">
                        <p className="cardEventTitle">On Hover Event</p>
                        <div className="button d-flex justify-content-center">
                            <button ref={color} id="buttonTwo" className="cardEventButton2"
                                onMouseOver={(e) => {
                                    color.current.style.backgroundColor = "#816843"
                                    color.current.style.color = "white"
                                }}

                                onMouseOut={(e) => {
                                    color.current.style.backgroundColor = "#F1EEEA"
                                    color.current.style.color = "black"
                                }}>Display</button>

                        </div>
                        <p id="two" className="cardEventResult"
                            onMouseOver={(e) => { e.target.innerHTML = "Text Changed !" }}
                            onMouseOut={(e) => { e.target.innerHTML = "This text will change on hover !" }}>
                            This text will change on hover !</p>
                    </div>
                    <div className="card">
                        <p className="cardEventTitle">On Focus Event</p>
                        <div className="button d-flex justify-content-center">
                            <input className="cardEventInput" type="text" id="three" placeholder="search..."
                                onFocus={(e) => {
                                    e.target.style.backgroundColor = "#816843"
                                    e.target.style.color = "white"
                                }}
                                onBlur={(e) => {
                                    e.target.value = e.target.value.toUpperCase()
                                    e.target.style.backgroundColor = "white"
                                    e.target.style.color = "black"
                                }} />
                        </div>
                    </div>
                </div>

                <div className='cardContainer d-flex justify-content-around mt-5'>
                    <div className="card">
                        <p className="cardEventTitle">On Change Event</p>
                        <div className="button d-flex justify-content-center">
                            <input type="text" placeholder="user input..." className="cardEventInput"
                                onChange={(e) => setInput(e.target.value)} />
                        </div>
                        <p id="four" className="cardEventResult">{input}</p>
                    </div>
                    <div className="card">
                        <p className="cardEventTitle">Right Click Event</p>
                        <div className="rightbutton d-flex justify-content-center">
                            <button className="cardEventButton3" onFocus={(e) => { handleRightClick(e) }}>Right Click</button>
                        </div>
                        <p className="cardEventResult">{right}</p>
                    </div>
                    <div className="card">
                        <p className="cardEventTitle">Text Manipulator</p>
                        <div className="textfield d-flex justify-content-center">
                            <textarea className="form-control" placeholder="type text here..." value={text} onChange={(e) => handleFieldValue(e)}id="floatingTextarea2" style={{ height: "50px", width: "360px", border: "1px solid black" }}></textarea>
                        </div>
                        <div className="displaydiv">
                            <div className="display">
                                <p>User Input is: {text}</p>
                                <p>Character Count is: {text == "" ? 0: text.trim().length}</p>
                                <p>Word Count is: {text == "" ? 0 : text.split(/\s+/).filter(word => word.trim() !== "").length}</p>
                                <p>Capital Letter Count is: {capital.length}</p>
                                <p>Number of Whitespace Characters: {white.length}</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Events