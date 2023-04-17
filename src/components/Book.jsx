// React
import { useEffect, useState } from "react";
// Calendar
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Radio from '@mui/material/Radio';
import { green } from "@mui/material/colors";

export const Book = () => {
    const dateNow = new Date();
    const [ date, setDate ] = useState(dayjs(dateNow));
    const [ formatDate, setFormatDate ] = useState(null)

    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
    
      const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'type-group',
        inputProps: { 'aria-label': item },
      });

    useEffect(() => {
        setFormatDate(dayjs(date.$d).format('DD/MM/YYYY'));

    }, [date])

    return(
        <div className="book">

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar value={date} onChange={(value) => setDate(value)} minDate={dayjs(dateNow)} />
            </LocalizationProvider>


            <div>
                <div>
                    <h3>Shared Group</h3>
                    <h5>RESERVE AND PAY</h5>

                    <h4>Price €25</h4>
                    <p>No additional taxes</p>

                    <div>
                        <button>10:00 AM</button>
                        <button>3:30 PM</button>
                    </div>

                    <div>
                        <Radio {...controlProps('a')} sx={{ color: green[500], '&.Mui-checked': {color: green[800]} }} />
                    </div>
                </div>

                <div>
                <h3>Private Group</h3>
                    <h5>RESERVE AND PAY</h5>

                    <h4>Price €35</h4>
                    <p>No additional taxes</p>

                    <div>
                        <button>11:30 AM</button>
                        <button>5:00 PM</button>
                    </div>

                    <div>
                        <Radio {...controlProps('b')} sx={{ color: green[500], '&.Mui-checked': {color: green[800]} }} />
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <h3>Adults</h3>
                        <p>Age 18 - 99</p>
                    </div>

                    <div>
                        <button>-</button>
                        <h4>0</h4>
                        <button>+</button>
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Children</h3>
                        <p>Age 6 - 17</p>
                    </div>

                    <div>
                        <button>-</button>
                        <h4>0</h4>
                        <button>+</button>
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Infants</h3>
                        <p>Age 0 - 5</p>
                    </div>

                    <div>
                        <button>-</button>
                        <h4>0</h4>
                        <button>+</button>
                    </div>
                </div>
            </div>

            <div>
                <button>CHECK NOW</button>
            </div>
        </div>
    );
}