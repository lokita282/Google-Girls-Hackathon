import { Box } from '@mui/system'
import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Food from '../../Components/Food'

function Dashboard() {
  return (
    <>
      <Sidebar>
        <Food />
      </Sidebar>
    </>
  )
}

export default Dashboard
