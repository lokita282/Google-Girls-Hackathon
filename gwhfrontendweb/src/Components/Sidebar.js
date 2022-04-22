import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import logo from '../Images/logo.png'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import '../Assets/Sidebar.css'
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'
import { useTheme } from '@mui/material/styles'
import { Button, Popover } from '@mui/material'
import googleassistant from '../Images/googleassistant.png'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from "react-router";


const drawerWidth = 240

function ResponsiveDrawer(props) {
    let navigate = useNavigate()
    const commands = [
        {
            command: 'Search *',
            callback: (searchSite) => {
                window.open(`https://www.google.com/search?q=` + searchSite)
            },
        },
        {
            command: 'how to connect with Wi-Fi',
            callback: () => {
                navigate('/task')
            },
        },
        {
            command: 'navigate to *',
            callback: (navigateto) => {
                navigate(`/${navigateto}`)
            },
        },
    ]
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition({ commands })

    const { windows } = props
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const { children } = props
    const [value, setValue] = React.useState(0)
    const theme = useTheme()
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }

    const [anchorEl, setAnchorEl] = React.useState(null)

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <Box className="logoBox">
                <img src={logo} className="logo" />
            </Box>
            <Divider />
            <List>
                <ListItem button onClick={() => navigate('/')}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText
                        sx={{ color: '#000', textDecoration: 'none!important' }}
                        primary="Dashboard"
                    />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => navigate('/webinars')}>
                    <ListItemIcon>
                        <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary="Webinars" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => navigate('/news')}>
                    <ListItemIcon>
                        <NewspaperIcon />
                    </ListItemIcon>
                    <ListItemText primary="News/Podcasts" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => navigate('/support')}>
                    <ListItemIcon>
                        <ContactSupportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Support" />
                </ListItem>
            </List>
        </div>
    )

    const container =
        windows !== undefined ? () => windows().document.body : undefined

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        SeniorSmart
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    backgroundColor: '#E8EAED',
                }}
            >
                <Toolbar />
                {children}
                <PopupState
                    variant="popover"
                    popupId="demo-popup-popover"
                    onClick={SpeechRecognition.startListening}
                >
                    {(popupState) => (
                        <div onClick={SpeechRecognition.startListening}>
                            <Fab
                                sx={{
                                    position: 'fixed',
                                    bottom: 16,
                                    right: 16,
                                }}
                                aria-label="ADD"
                                {...bindTrigger(popupState)}
                            >
                                <img
                                    src={googleassistant}
                                    width={70}
                                    height={70}
                                    onClick={SpeechRecognition.startListening}
                                />
                            </Fab>
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                            >
                                <Typography sx={{ p: 2 }}>
                                    {transcript ? transcript : 'Tell us your problem'}
                                </Typography>
                            </Popover>
                        </div>
                    )}
                </PopupState>
            </Box>
        </Box>
    )
}

ResponsiveDrawer.propTypes = {
    windows: PropTypes.func,
}

export default ResponsiveDrawer