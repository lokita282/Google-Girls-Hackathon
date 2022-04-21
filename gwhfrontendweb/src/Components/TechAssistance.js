import React from 'react'
import food from '../Images/food.png'
import travel from '../Images/travel.png'
import medicine from '../Images/medicine.png'
import consultation from '../Images/consultation.png'
import grocery from '../Images/grocery.png'
import connect_with_people from '../Images/connect_with_people.png'
import { Grid } from '@mui/material'
import '../Assets/TechAssistance.css'


function TechAssistance() {
    return (
        <>
            <h4 style={{ marginTop: '5%' }}>Technical Assistance</h4>
            <Grid container>
                <Grid item md={2} className='center'>
                    <img src={food} />
                    <p className='serviceName'>Food</p>
                </Grid>
                <Grid item md={2} className='center'>
                    <img src={travel} />
                    <p className='serviceName'>Travel</p>
                </Grid>
                <Grid item md={2} className='center'>
                    <img src={grocery} />
                    <p className='serviceName'>Grocery</p>
                </Grid>
                <Grid item md={2} className='center'>
                    <img src={medicine} />
                    <p className='serviceName'>Medicine</p>
                </Grid>
                <Grid item md={2} className='center'>
                    <img src={consultation} />
                    <p className='serviceName'>Consultation</p>
                </Grid>
                <Grid item md={2} className='center'>
                    <img src={connect_with_people} />
                    <p className='serviceName'>Connect with people</p>
                </Grid>
            </Grid>
        </>
    )
}

export default TechAssistance