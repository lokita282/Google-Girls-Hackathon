import { Box } from '@mui/system'
import React from 'react'
import App from '../Components/App2'
import Sidebar from '../Components/Sidebar'
import Tasks from '../Components/Tasks'
import TechAssistance from '../Components/TechAssistance'

function Dashboard() {
    return (
        <>
            <Sidebar>
                <Tasks />
                <TechAssistance />
            </Sidebar>
        </>
    )
}

export default Dashboard