import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);

    };

    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.handleAlert("Your Text Converted To Uppercase!","success");

        // handleDisappear();
    };

    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.handleAlert("Your Text Converted To Lowercase!","success");

        // handleDisappear();
    };

    const handleSentenceCase = () => {
        let temp = text.replace(/\s+/g, ' ').trim().toLowerCase();
        setText(temp.charAt(0).toUpperCase() + temp.slice(1));
        props.handleAlert("Your Text Converted To Sentencecase!","success");

        // handleDisappear();
    };

    const handleCapitalize = () => {
        let temp = text.replace(/\s+/g, ' ').trim();
        if (temp === "") {
            setText("");
        } else {
            let words = temp.toLowerCase().split(" ");
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
            setText(words.join(" "));
        }
        props.handleAlert("All Words In The Sentence Are Capitalized!","success");

        // handleDisappear();
    };

    const handleReverse = () => {
        let words = text.split("");
        words = words.reverse();
        setText(words.join(""));
        props.handleAlert("The Sentence Is Reversed!","success");

        // handleDisappear();
    };

    const isUpperCase = (char) =>
        char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
    const isLowerCase = (char) =>
        char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
    const handleSwitchCase = () => {
        let str = text;
        let newStr = "";
        const margin = 32;
        for (let i = 0; i < str.length; i++) {
            const curr = str[i];
            if (isLowerCase(curr)) {
                newStr += String.fromCharCode(curr.charCodeAt(0) - margin);
            } else if (isUpperCase(curr)) {
                newStr += String.fromCharCode(curr.charCodeAt(0) + margin);
            } else {
                newStr += curr;
            }
        }
        setText(newStr);
        props.handleAlert("All Characters In The Sentence Switched Case!","success");

        // handleDisappear();
    };

    const handleAlternateCase = () => {
        let temp = text.toLowerCase().split("");
        for (let index = 0; index < temp.length; index += 2) {
            temp[index] = temp[index].toUpperCase();
        }
        setText(temp.join(""));
        props.handleAlert("Text Converted To AlternateCase!","success");

        // handleDisappear();
    };

    const handleRemoveSpace = () => {
        setText(text.replace(/\s+/g, ' ').trim());
        props.handleAlert("All Extra Spaces In The Sentence Are Removed!","success");

        // handleDisappear();
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.handleAlert("Your Text Copied Successfully!","success");

        // handleDisappear();
    };

    const handleClearText = () => {
        setText("");
        props.handleAlert("Text Cleared!","success");

        // handleDisappear();
    };

    const [text, setText] = useState("Enter Your Text Here");

    return (
        <div className="container my-5">
            <div className="emptySpace"></div>
            <div className="row">
                <h5 className="display-6 text-center fw-bolder">{props.heading.toUpperCase()}</h5>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : 'white', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'black' }} id="myBox" rows="8">
                </textarea>
            </div>
            <div className="row my-3">
                <div className="col-12 d-xl-inline-flex justify-content-between">
                    <button type="button" className="btn btn-info" style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : '#54b4d3', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'white' }} onClick={handleUpperCase}>
                        UpperCase
                    </button>
                    <button type="button" className="btn btn-info" style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : '#54b4d3', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'white' }} onClick={handleLowerCase}>
                        LowerCase
                    </button>
                    <button type="button" className="btn btn-info" style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : '#54b4d3', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'white' }} onClick={handleSentenceCase}>
                        SentenceCase
                    </button>
                    <button type="button" className="btn btn-info" style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : '#54b4d3', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'white' }} onClick={handleCapitalize} >
                        Capitalize
                    </button>
                    <button type="button" className="btn btn-info" style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : '#54b4d3', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'white' }} onClick={handleReverse}>
                        Reverse
                    </button>
                    <button type="button" className="btn btn-info" style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : '#54b4d3', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'white' }} onClick={handleSwitchCase} >
                        SwithCase
                    </button>
                    <button type="button" className="btn btn-info" style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : '#54b4d3', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'white' }} onClick={handleAlternateCase}>
                        Alternate
                    </button>
                    <button type="button" className="btn btn-info" style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : '#54b4d3', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'white' }} onClick={handleRemoveSpace}>
                        Remove Space
                    </button>
                    <button type="button" className="btn btn-info" style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : '#54b4d3', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'white' }} onClick={handleCopyText}>
                        Copy Text
                    </button>
                    <button type="button" className="btn btn-info" style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : '#54b4d3', 
                    color: props.mode === 'dark' ? '#B6EADA' : 'white' }} onClick={handleClearText}>
                        Clear Text
                    </button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 table-responsive my-5">
                    {/* <div className="my-5 container"> */}
                        <table className="table table-hover" style={{ color: props.mode === 'dark' ? '#B6EADA' : '#4f4f4f' }}>
                            <thead className="table-secondary">
                                <tr>
                                    <th colspan="2" className="text-center">
                                        Your Text Summary
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Number Of Words In Your Text</th>
                                    <th scope="col">{text.split(" ").length}</th>
                                </tr>
                                <tr>
                                    <th scope="col">Number Of Characters In Your Text</th>
                                    <th scope="col">{text.length}</th>
                                </tr>
                            </tbody>
                            <thead className="table-secondary">
                                <tr>
                                    <th colspan="2" className="text-center">
                                        The average reader will read 1 words in 0 minutes when
                                        reading at a speed of 300 words per minute (wpm).
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Time To Read Your Text</th>
                                    <th scope="col">{0.2 * text.split(" ").length} sec</th>
                                </tr>
                            </tbody>
                        </table>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
};

// Specifies the default values for props:
TextForm.defaultProps = {
    heading: "Default Heading",
};
