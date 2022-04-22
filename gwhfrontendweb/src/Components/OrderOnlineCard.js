import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions, Box } from '@mui/material'
import orderOnline from '../Images/order_online.png'
import zomato from '../Images/zomato.png'
import swiggy from '../Images/swiggy.png'

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 425, padding: '30px 70px' }}>
      <CardActionArea>
        <CardMedia component="img" image={orderOnline} alt="food" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Order Food online 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ alignItems: 'center', width: '100%' }}>
          <Button size="small" color="primary">
            <img src={zomato} />
          </Button>
          <Button size="small" color="primary">
            <img src={swiggy} />
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
