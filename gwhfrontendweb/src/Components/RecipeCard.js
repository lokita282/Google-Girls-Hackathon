import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions, Box } from '@mui/material'
import food from '../Images/food.png'
import youtube from '../Images/youtube.png'
import recipes from '../Images/recipes.png'

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ minWidth: '482px', padding: '30px 70px' }}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: 'contain' }}
          height="180px"
          component="img"
          image={food}
          alt="food"
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="div">
            Search for recipes
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ alignItems: 'center', width: '100%' }}>
          <Button size="small" color="primary" sx={{ marginLeft: '25%' }}>
            <img src={youtube} />
          </Button>
          <Button size="small" color="primary">
            <img src={recipes} />
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
