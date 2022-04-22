import React, { useEffect, useState } from 'react'
import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';
import introJs from 'intro.js';
import { Box } from '@mui/material';

function App() {
    const [enabled, setEnabled] = useState(true)
    const [initialStep, setInitialStep] = useState(0)

    const onExit = () => {
        setEnabled(false)
    }
    const steps = [
        {
            element: ".sandbox",
            intro: "",
            position: "middle",
            tooltipClass: "myTooltipClass",
            highlightClass: "myHighlightClass",
            exitOnOverlayClick: false
        },
        {
            element: ".element",
            intro: "Click on Login button If you've an account",
            position: "middle",
            tooltipClass: "myTooltipClass",
            highlightClass: "myHighlightClass",
            exitOnOverlayClick: false

        },
        {
            element: ".number",
            intro: "Enter your number here please",
            position: "right",
            tooltipClass: "myTooltipClass",
            highlightClass: "myHighlightClass"

        },
        {
            element: ".number",
            intro: "Enter your number here please",
            position: "right",
            tooltipClass: "myTooltipClass",
            highlightClass: "myHighlightClass"

        }
    ];
    return (
        <>
            <Steps enabled={true} steps={steps} initialStep={1} onExit={onExit} />
            <h2 className="element" style={{ position: 'absolute', zIndex: '10', left: '82.5%', bottom: '79%' }}></h2>

            <iframe src="https://www.zomato.com/" style={{ width: '99.5%', height: '98.5vh' }}>
            </iframe>
            <h2 className="number" style={{ position: 'absolute', zIndex: '10', left: '68.5%', bottom: '56%' }}></h2>
        </>
    )
}

export default App