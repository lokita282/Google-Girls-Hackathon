import { Box } from '@mui/system'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import Tasks from '../Components/Tasks'
import TechAssistance from '../Components/TechAssistance'
import Task1Details from '../Components/Task1Details'
import Typography from '@mui/material/Typography'

function Dashboard() {
  return (
    <>
      <Sidebar>
        
        <Task1Details />
        {/* <Tasks /> */}
        {/* <TechAssistance /> */}
      </Sidebar>
    </>
  )
}

export default Dashboard
