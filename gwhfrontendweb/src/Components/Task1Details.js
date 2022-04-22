import React from 'react'
import task1step1 from '../Images/tasks/task1_step1.png'
import task1step2 from '../Images/tasks/task1_step2.png'
import task1step3 from '../Images/tasks/task1_step3.png'
import task1step4 from '../Images/tasks/task1_step4.png'
import task1step5 from '../Images/tasks/task1_step5.png'
import task1step6 from '../Images/tasks/task1_step6.png'
import task1step7 from '../Images/tasks/task1_step7.png'
import {Paper, Typography, Box } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import '../Assets/Task1.css'

const Task1Details = () => {
  return (
    <div>
      <Paper className="paper">
        <Typography variant="h5" color="initial">
          <b>How to perform this task: </b>
        </Typography>
        <Typography variant="body1" color="initial">
          (to connect to Wi-Fi)
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ padding: '10px' }}>
            <Typography variant="body1" color="initial">
              <b>Step 1:</b>
            </Typography>
            <img src={task1step1} />
          </Box>
          <Box sx={{ paddingTop: '190px' }}>
            <ArrowForwardIcon fontSize="large" />
          </Box>
          <Box sx={{ padding: '10px' }}>
            <Typography variant="body1" color="initial">
              <b>Step 2:</b>
            </Typography>
            <img src={task1step2} />
          </Box>
          <Box sx={{ paddingTop: '190px' }}>
            <ArrowForwardIcon fontSize="large" />
          </Box>
          <Box sx={{ padding: '10px' }}>
            <Typography variant="body1" color="initial">
              <b>Step 3:</b>
            </Typography>
            <img src={task1step3} />
          </Box>
          <Box sx={{ paddingTop: '190px' }}>
            <ArrowForwardIcon fontSize="large" />
          </Box>
          <Box sx={{ padding: '10px' }}>
            <Typography variant="body1" color="initial">
              <b>Step 4:</b>
            </Typography>
            <Typography variant="body1" fontSize="14px" color="initial">
              Click on the dropdown to view available list of networks
            </Typography>
            <img height="500px" src={task1step4} />
          </Box>
          <Box sx={{ paddingTop: '190px' }}>
            <ArrowForwardIcon fontSize="large" />
          </Box>
          <Box sx={{ padding: '10px' }}>
            <Typography variant="body1" color="initial">
              <b>Step 5:</b>
            </Typography>
            <Typography variant="body1" fontSize="14px" sx={{paddingBottom: '14px' }} color="initial">
              Select your Wi-Fi network
            </Typography>
            <img height="500px" src={task1step5} />
          </Box>
          <Box sx={{ paddingTop: '190px' }}>
            <ArrowForwardIcon fontSize="large" />
          </Box>
          <Box sx={{ padding: '10px' }}>
            <Typography variant="body1" color="initial">
              <b>Step 6:</b>
            </Typography>
            <img height="535px" src={task1step6} />
          </Box>
          <Box sx={{ paddingTop: '190px' }}>
            <ArrowForwardIcon fontSize="large" />
          </Box>
          <Box sx={{ padding: '10px' }}>
            <Typography variant="body1" color="initial">
              <b>Step 7:</b>
            </Typography>
            <Typography variant="body1" fontSize="14px" color="initial">
              This will show a confirmation upon successful connection
            </Typography>
            <img height="500px" src={task1step7} />
          </Box>
        </Box>
      </Paper>
    </div>
  )
}

export default Task1Details