import React from 'react'
import Sidebar from '../Components/Sidebar'
import Faqs from '../Components/Faqs'
import ContactUs from '../Components/ContactUs'
import Typography from '@mui/material/Typography'

const Support = () => {
  return (
    <div>
      <Sidebar>
        <Typography fontWeight="bold" variant="h5" color="initial" sx={{paddingBottom: '10px'}}>FAQs</Typography>
        <Faqs />
        <Typography fontWeight="bold" variant="h5" color="initial" sx={{paddingBottom: '10px'}}>Contact Us</Typography>
        <ContactUs />
      </Sidebar>
    </div>
  )
}

export default Support