// Calendar
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export const Third = (props) => {
    const { title, subtitle, date, setDate, setPage } = props;
    const dateNow = new Date();

    return(
        <div className='contents_third'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar value={date} onChange={(value) => {
                        setDate(value);
                        setPage(prev => prev + 1);
                    }} minDate={dayjs(dateNow)} />
                </LocalizationProvider>
            </div>
        </div>
    );
};