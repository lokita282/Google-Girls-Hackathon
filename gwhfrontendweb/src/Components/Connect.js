import { TextField, Grid, Button } from '@mui/material'
import React, { useState } from 'react'

function Connect() {
    const [person, setPerson] = useState({ email: '', firstname: '', lastname: '', phonenumber: '' })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({ ...person, [name]: value })
    }

    const handleSubmit = () => {
        console.log(person)
    }
    return (
        <>
            <Grid container columnSpacing={5} >
                <Grid item md={6}>
                    <TextField margin="normal" sx={{ fontFamily: 'Readex Pro, sans-serif', width: '100%' }} required id="email" label="Email" name="email" value={person.email} onChange={handleChange} />
                </Grid>
                <Grid item md={6}>
                    <TextField margin="normal" sx={{ fontFamily: 'Readex Pro, sans-serif', width: '100%' }} required id="firstname" label="First Name" name="firstname" value={person.firstname} onChange={handleChange} />
                </Grid>
                <Grid item md={6}>
                    <TextField margin="normal" sx={{ fontFamily: 'Readex Pro, sans-serif', width: '100%' }} required id="lastname" label="Last Name" name="lastname" value={person.lastname} onChange={handleChange} />
                </Grid>
                <Grid item md={6}>
                    <TextField margin="normal" sx={{ fontFamily: 'Readex Pro, sans-serif', width: '100%' }} required id="number" label="Number" name="number" value={person.number} onChange={handleChange} />
                </Grid>
                <Grid item md={12}>
                    <TextField
                        name="message"
                        id="outlined-multiline-static"
                        label="Message"
                        sx={{ width: '100%' }}
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item md={12}>
                    <Button onClick={handleSubmit} sx={{ width: '100%', color: 'white', backgroundColor: '#007AFF', marginTop: '2%' }}>Submit</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Connect