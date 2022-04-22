import { Grid } from '@material-ui/core'
import { Card, CardContent, Paper, Chip, Button } from '@mui/material'
import React, { useState } from 'react'
import EventsData from '../Components/EventArray'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
    MonthView,
} from '@devexpress/dx-react-scheduler-material-ui';

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
const currentDate = `${year}-${month}-${date}`;

function Events() {
    const [addedEvents, setAddedEvent] = useState([])
    const [mapEvents, setMapEvents] = useState([])
    const schedulerData = [
        { startDate: '2022-04-01T09:45', endDate: '2022-04-01T11:00', title: 'Meeting' },
        { startDate: '2022-04-01T12:00', endDate: '2022-04-01T13:30', title: 'Go to a gym' },
    ];
    const addEvent = (id) => {
        const filteredEvent = EventsData.filter((event) => event.id === id)
        setAddedEvent([...addedEvents, filteredEvent])
        setMapEvents([...mapEvents, { startDate: filteredEvent[0].startTime, endDate: filteredEvent[0].endTime, title: filteredEvent[0].eventName }])
    }
    console.log(addedEvents);
    console.log(mapEvents);
    return (
        <>
            <div style={{ marginBottom: '3%' }}>

                <Grid container columns={10} spacing={6}>
                    {
                        EventsData.map((event) => {
                            let start = event.startTime.split('T')[1]
                            let end = event.endTime.split('T')[1]
                            let time = `${start}-${end}`
                            return <Grid item md={2} key={event.id} >
                                <Grid container sx={{ display: 'flex', backgroundColor: 'white', borderRadius: '4px', height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: '4px', alignContent: 'space-between' }}>
                                    <Grid item>
                                        <Grid container>
                                            <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <img src={event.image} style={{ width: '200px', height: '100px', borderRadius: '2px' }} />
                                            </Grid>
                                            <Grid item>
                                                <h4 style={{ margin: '0px', padding: '0px' }}>{event.eventName}</h4>
                                                <p style={{ margin: '0px', padding: '0px', fontSize: '10px' }}>{event.desc}</p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Chip icon={<AccessTimeIcon />} label={time} sx={{ fontSize: '10px' }} />
                                        <Button style={{ fontSize: '10px' }} onClick={() => addEvent(event.id)}>Add Event</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        })
                    }
                </Grid>
            </div>
            <Paper sx={{ borderRadius: '20px' }}>
                <Scheduler
                    style={{ borderRadius: '20px' }}
                    data={mapEvents}
                >
                    <ViewState
                        style={{ borderRadius: '20px' }}
                        currentDate={currentDate}
                    />
                    <MonthView />
                    <Appointments />
                </Scheduler>
            </Paper>

        </>
    )
}

export default Events