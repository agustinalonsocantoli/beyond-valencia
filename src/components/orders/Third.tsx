/* eslint-disable @typescript-eslint/no-explicit-any */
// Calendar
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

interface Props {
    title: string;
    subtitle: string;
    date: any;
    setDate: (action: Date) => void;
}

export const Third = (props: Props) => {
    const { title, subtitle, date, setDate } = props;
    const dateNow: Date = new Date();

    return(
        <div className='contents_third'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar value={date} onChange={(value) => {
                        setDate(value);
                    }} minDate={dayjs(dateNow)} />
                </LocalizationProvider>
            </div>
        </div>
    );
};