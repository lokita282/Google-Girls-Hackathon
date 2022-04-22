import React from 'react'
import { TextField, Box, OutlinedInput, InputAdornment, Typography, } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import '../Assets/Food.css'
import RecipeCard from "../Components/RecipeCard";
import OrderOnlineCard from "../Components/OrderOnlineCard";


const Food = () => {
  return (
    <div>
      <div>
        <OutlinedInput
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          }
          placeholder="Search Here"
          style={{ width: '100%', borderRadius: '50px' }}
          variant="outlined"
        />
      </div>
      <Typography marginLeft="40px" variant="h6" color="initial">
        <b>Searching</b>Food
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box className="Card-recipe">
          <RecipeCard />
        </Box>
        <Box className="order-online">
          <OrderOnlineCard />
        </Box>
        <Box className="order-online">
          {/* <Card /> */}
        </Box>
      </Box>
    </div>
  )
}

export default Food