import Paper from '@mui/material/Paper';
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


function Schedule() {
    const schedulerData = [
        { startDate: '2022-04-01T09:45', endDate: '2022-04-01T11:00', title: 'Meeting' },
        { startDate: '2022-04-01T12:00', endDate: '2022-04-01T13:30', title: 'Go to a gym' },
    ];
    return (

        <Paper sx={{ borderRadius: '20px' }}>
            <Scheduler
                style={{ borderRadius: '20px' }}
                data={schedulerData}
            >
                <ViewState
                    style={{ borderRadius: '20px' }}
                    currentDate={currentDate}
                />
                <MonthView />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}

export default Schedule