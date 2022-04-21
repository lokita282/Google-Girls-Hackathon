import { Box } from '@mui/system'
import React from 'react'
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