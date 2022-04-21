import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'

function TaskCard({ taskName, image, btnTxt }) {
    return (
        <>
            <Card >
                <CardContent sx={{ padding: '20px' }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Grid item md={8}>
                            <h3 style={{ margin: '0', padding: '0' }}>{taskName}</h3>
                            <Button sx={{ padding: '0' }}>{btnTxt}</Button>
                        </Grid>
                        <Grid md={4} item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img style={{ width: '100px', height: '100px', borderRadius: '2px', objectFit: 'cover' }} src={image} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default TaskCard