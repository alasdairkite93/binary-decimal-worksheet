import '../questions.css';
import {useEffect, useState} from "react";

var q1_attempts = 0;
var q2_attempts = 0;
var q3_attempts = 0;
var q4_attempts = 0;
var q5_attempts = 0;
var q6_attempts = 0;
var q7_attempts = 0;
var q8_attempts = 0;
var q9_attempts = 0;
var q10_attempts = 0;
var q11_attempts = 0;
var q12_attempts = 0;
var q13_attempts = 0;
var q14_attempts = 0;
var q15_attempts = 0;
var q16_attempts = 0;

var score = 0;
function singleInput(input){

    return parseInt(input, 2).toString(10);
}

export default function BinaryDecimal() {

    const [inputValue, setInputvalue] = useState();
    const [q2Input, setQ2Input] = useState();
    const [q3Input, setQ3Input] = useState();
    const [q4Input, setQ4Input] = useState();
    const [q5Input, setQ5Input] = useState();
    const [q6Input, setQ6Input] = useState();
    const [q7Input, setQ7Input] = useState();
    const [q8Input, setQ8Input] = useState();
    const [q9Input, setQ9Input] = useState();
    const [q10Input, setQ10Input] = useState();
    const [q11Input, setQ11Input] = useState();
    const [q12Input, setQ12Input] = useState();
    const [q13Input, setQ13Input] = useState();
    const [q14Input, setQ14Input] = useState();
    const [q15Input, setQ15Input] = useState();
    const [q16Input, setQ16Input] = useState();
    const handleQ1 = async (event) => {
        var result = parseInt(singleInput(inputValue));
        if (result === 5 && q1_attempts <= 3) {
            document.getElementById('q1').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q1_attempts = q1_attempts + 1;
            document.getElementById('q1').style.backgroundColor = "white";
            if (q1_attempts > 3) {
                document.getElementById('q1answer').innerText = "Max tries exceed";
            }
        }
    }

    const handleQ2 = async (event) => {

        if (q2Input === 7 && q2_attempts <= 3) {
            document.getElementById('q2').style.backgroundColor = "green";
            score = score + 1;        }
        else {
            q2_attempts = q2_attempts + 1;
            document.getElementById('q2').style.backgroundColor = "white";
            if (q2_attempts > 3) {
                document.getElementById('q2answer').innerText = "Max tries exceed";
            }
        }
    }

    const handleQ3 = async (event) => {

        if (q3Input === 11 && q3_attempts <= 3) {
            document.getElementById('q3').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q3_attempts = q3_attempts + 1;
            document.getElementById('q3').style.backgroundColor = "white";
            if (q3_attempts > 3) {
                document.getElementById('q3answer').innerText = "Max tries exceed";
            }
        }
    }

    const handleQ4 = async (event) => {

        if (q4Input === 37 && q4_attempts <= 3) {
            document.getElementById('q4').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q4_attempts = q4_attempts + 1;
            document.getElementById('q4').style.backgroundColor = "white";
            if (q4_attempts > 3) {
                document.getElementById('q4answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ5 = async (event) => {

        if (q5Input === 117 && q5_attempts <= 3) {
            document.getElementById('q5').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q5_attempts = q5_attempts + 1;
            document.getElementById('q5').style.backgroundColor = "white";
            if (q5_attempts > 3) {
                document.getElementById('q5answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ6 = async (event) => {

        if (q6Input === 176 && q6_attempts <= 3) {
            document.getElementById('q6').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q6_attempts = q6_attempts + 1;
            document.getElementById('q6').style.backgroundColor = "white";
            if (q6_attempts > 3) {
                document.getElementById('q6answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ7 = async (event) => {

        if (q7Input === 193 && q7_attempts <= 3) {
            document.getElementById('q7').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q7_attempts = q7_attempts + 1;
            document.getElementById('q7').style.backgroundColor = "white";
            if (q7_attempts > 3) {
                document.getElementById('q7answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ8 = async (event) => {

        if (q8Input === 205 && q8_attempts <= 3) {
            document.getElementById('q8').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q8_attempts = q8_attempts + 1;
            document.getElementById('q8').style.backgroundColor = "white";
            if (q8_attempts > 3) {
                document.getElementById('q8answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ9 = async (event) => {

        if (q9Input === 254 && q9_attempts <= 3) {
            document.getElementById('q9').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q9_attempts = q9_attempts + 1;
            document.getElementById('q9').style.backgroundColor = "white";

            if (q9_attempts > 3) {
                document.getElementById('q9answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ10 = async (event) => {

        if (q10Input === 255 && q10_attempts <= 3) {
            document.getElementById('q10').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q10_attempts = q10_attempts + 1;
            document.getElementById('q10').style.backgroundColor = "white";
            if (q10_attempts > 3) {
                document.getElementById('q10answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ11 = async (event) => {

        var result = parseInt(singleInput(q11Input));
        if (result === 92 && q11_attempts <= 3) {
            document.getElementById('q11').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q11_attempts = q11_attempts + 1;
            document.getElementById('q11').style.backgroundColor = "white";
            if (q11_attempts > 3) {
                document.getElementById('q11answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ12 = async (event) => {

        var result = parseInt(singleInput(q12Input));
        if (result === 255 && q12_attempts <= 3) {
            document.getElementById('q12').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q12_attempts = q12_attempts + 1;
            document.getElementById('q12').style.backgroundColor = "white";
            if (q12_attempts > 3) {
                document.getElementById('q12answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ13 = async (event) => {

        var result = parseInt(singleInput(q13Input));
        if (result === 196 && q13_attempts <= 3) {
            document.getElementById('q13').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q13_attempts = q13_attempts + 1;
            document.getElementById('q13').style.backgroundColor = "white";
            if (q13_attempts > 3) {
                document.getElementById('q13answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ14 = async (event) => {

        var result = parseInt(singleInput(q14Input));
        if (result === 51 && q14_attempts <= 3) {
            document.getElementById('q14').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q14_attempts = q14_attempts + 1;
            document.getElementById('q14').style.backgroundColor = "white";
            if (q14_attempts > 3) {
                document.getElementById('q14answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ15 = async (event) => {

        var result = parseInt(singleInput(q15Input));
        if (result === 23 && q15_attempts <= 3) {
            document.getElementById('q15').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q15_attempts = q15_attempts + 1;
            document.getElementById('q15').style.backgroundColor = "white";
            if (q15_attempts > 3) {
                document.getElementById('q15answer').innerText = "Max tries exceed";
            }
        }
    }
    const handleQ16 = async (event) => {

        var result = parseInt(singleInput(q16Input));
        if (result === 113 && q16_attempts <= 3) {
            document.getElementById('q16').style.backgroundColor = "green";
            score = score + 1;
        }
        else {
            q16_attempts = q16_attempts + 1;
            document.getElementById('q16').style.backgroundColor = "white";
            if (q16_attempts > 3) {
                document.getElementById('q16answer').innerText = "Max tries exceed";
            }
        }
    }

    useEffect(() => {
        if (score === 16){
            document.getElementById("certificate").src = "https://res.cloudinary.com/dsfypcapq/image/upload/v1732687251/badge-removebg-preview_x68bj3.png";
        }
    }, []);


    return (
        <div>
            <div className="wrapper">
                <div>
                    <div id="q1" className="questionbox">
                        <h3 className="quetion">Convert 5 to binary</h3>
                        <input  type="number" onChange={e => setInputvalue(parseInt(e.target.value))} />
                        <button onClick={handleQ1}>Submit</button>
                        <p id="q1answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q2" className="questionbox">
                        <h3 className="quetion">Convert 111 to denary.</h3>
                        <input  type="number" onChange={e => setQ2Input(parseInt(e.target.value))} />
                        <button onClick={handleQ2}>Submit</button>
                        <p id="q2answer"></p>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div>
                    <div id="q3" className="questionbox">
                        <h3 className="quetion">Convert 1011 to denary</h3>
                        <input  type="number" onChange={e => setQ3Input(parseInt(e.target.value))} />
                        <button onClick={handleQ3}>Submit</button>
                        <p id="q3answer"></p>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div>
                    <div id="q4" className="questionbox">
                        <h3 className="quetion">Convert 0100101 to denary.</h3>
                        <input  type="number" onChange={e => setQ4Input(parseInt(e.target.value))} />
                        <button onClick={handleQ4}>Submit</button>
                        <p id="q4answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q5" className="questionbox">
                        <h3 className="quetion">Convert 1110101 to denary</h3>
                        <input  type="number" onChange={e => setQ5Input(parseInt(e.target.value))} />
                        <button onClick={handleQ5}>Submit</button>
                        <p id="q5answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q6" className="questionbox">
                        <h3 className="quetion">Convert 10110000 to denary.</h3>
                        <input  type="number" onChange={e => setQ6Input(parseInt(e.target.value))} />
                        <button onClick={handleQ6}>Submit</button>
                        <p id="q6answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q7" className="questionbox">
                        <h3 className="quetion">Convert 11000001 to denary</h3>
                        <input  type="number" onChange={e => setQ7Input(parseInt(e.target.value))} />
                        <button onClick={handleQ7}>Submit</button>
                        <p id="q7answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q8" className="questionbox">
                        <h3 className="quetion">Convert 11001101 to denary.</h3>
                        <input  type="number" onChange={e => setQ8Input(parseInt(e.target.value))} />
                        <button onClick={handleQ8}>Submit</button>
                        <p id="q8answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q9" className="questionbox">
                        <h3 className="quetion">Convert 11111110 to binary</h3>
                        <input  type="number" onChange={e => setQ9Input(parseInt(e.target.value))} />
                        <button onClick={handleQ9}>Submit</button>
                        <p id="q9answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q10" className="questionbox">
                        <h3 className="quetion">Convert 11111111 to denary.</h3>
                        <input  type="number" onChange={e => setQ10Input(parseInt(e.target.value))} />
                        <button onClick={handleQ10}>Submit</button>
                        <p id="q10answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q11" className="questionbox">
                        <h3 className="quetion">Convert 92 to binary</h3>
                        <input  type="number" onChange={e => setQ11Input(parseInt(e.target.value))} />
                        <button onClick={handleQ11}>Submit</button>
                        <p id="q11answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q12" className="questionbox">
                        <h3 className="quetion">Convert 255 to binary.</h3>
                        <input  type="number" onChange={e => setQ12Input(parseInt(e.target.value))} />
                        <button onClick={handleQ12}>Submit</button>
                        <p id="q12answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q13" className="questionbox">
                        <h3 className="quetion">Convert 196 to binary</h3>
                        <input  type="number" onChange={e => setQ13Input(parseInt(e.target.value))} />
                        <button onClick={handleQ13}>Submit</button>
                        <p id="q13answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q14" className="questionbox">
                        <h3 className="quetion">Convert 51 to denary.</h3>
                        <input  type="number" onChange={e => setQ14Input(parseInt(e.target.value))} />
                        <button onClick={handleQ14}>Submit</button>
                        <p id="q14answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q15" className="questionbox">
                        <h3 className="quetion">Convert 23 to binary</h3>
                        <input  type="number" onChange={e => setQ15Input(parseInt(e.target.value))} />
                        <button onClick={handleQ15}>Submit</button>
                        <p id="q15answer"></p>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div>
                    <div id="q16" className="questionbox">
                        <h3 className="quetion">Convert 113 to denary.</h3>
                        <input  type="number" onChange={e => setQ16Input(parseInt(e.target.value))} />
                        <button onClick={handleQ16}>Submit</button>
                        <p id="q16answer"></p>
                    </div>
                </div>
            </div>
            <img id="certificate" height="500" width="500"></img>
        </div>
    )
}