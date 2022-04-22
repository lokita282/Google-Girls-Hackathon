import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function News() {

    const [news, setNews] = useState([]);
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
        };

        fetch("http://safestree.herokuapp.com/api/news", requestOptions)
            .then(response => response.json())
            .then(result => {
                setNews(result.articles)
            })
    }, [])
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {
                    news.map((article) => {
                        return <>
                            <Grid spacing={6} item md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5%', padding: '20px' }}>
                                <Card sx={{ display: 'flex', width: '450px', justifyContent: 'center', alignItems: 'center', height: '200px', padding: '20px' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {(article.title).slice(0, 30)}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {article.description.slice(0, 50)}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                <h6>{article.author}</h6>
                                                <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', }}>Know more</a>
                                            </Box>
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '150px' }}
                                        image={article.urlToImage}
                                        style={{ width: '150px', height: '150px', borderRadius: '3.5px' }}
                                        alt="Live from space album cover"
                                    />

                                </Card>
                            </Grid>
                        </>
                    })
                }

            </Grid>
        </>
    )
}

export default News