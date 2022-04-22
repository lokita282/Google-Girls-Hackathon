import { Box } from '@mui/system'
import React from 'react'
import News from '../Components/News'
import Sidebar from '../Components/Sidebar'

function NewsPage() {
    return (
        <>
            <Sidebar>
                <News />
            </Sidebar>
        </>
    )
}

export default NewsPage