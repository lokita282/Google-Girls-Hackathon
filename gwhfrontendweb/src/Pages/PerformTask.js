import { Box } from '@mui/system'
import React from 'react'
import App from '../Components/App2'
import Sidebar from '../Components/Sidebar'
import Task1Details from '../Components/Task1Details'
import Tasks from '../Components/Tasks'
import TechAssistance from '../Components/TechAssistance'

function Dashboard() {
    return (
        <>
            <Sidebar>
                <Task1Details />
            </Sidebar>
        </>
    )
}

export default Dashboard