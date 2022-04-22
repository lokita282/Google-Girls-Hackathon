import React from 'react'
import Scheduler from '../Components/Scheduler'
import Sidebar from '../Components/Sidebar'
import '../Assets/Webinars.css'
import Events from '../Components/Events'

function Webinars() {
    return (
        <>
            <Sidebar>
                <Events />
                {/* <Scheduler /> */}
            </Sidebar>
        </>
    )
}

export default Webinars