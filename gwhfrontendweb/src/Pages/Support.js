import React from 'react'
import Sidebar from '../Components/Sidebar'
import Faqs from '../Components/Faqs'
import Typography from '@mui/material/Typography'
import Connect from '../Components/Connect'

const Support = () => {
  return (
    <div>
      <Sidebar>
        <div>
          <Typography fontWeight="bold" variant="h5" color="initial" sx={{ paddingBottom: '10px' }}>FAQs</Typography>
          <Faqs />
          <Typography fontWeight="bold" variant="h5" color="initial" sx={{ paddingBottom: '10px', marginTop: '5%' }}>Contact Us</Typography>
          <Connect />
        </div>
      </Sidebar>
    </div>
  )
}

export default Support