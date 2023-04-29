export const First = (props) => {
    const { title, subtitle, longerTime, time, setTime, product } = props;
    const { h, allDay, longer, threeDays } = product;

    return(
        <div className='contents_first'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            <div className='contents_first-time'>
                { h && 
                    <div>
                        <span className={time === h.select ? 'active' : 'disable'} 
                        onClick={() => setTime(h.select)}
                        >
                            {h.time}
                        </span>
                        <span>{h.description}</span>
                    </div>
                }

                <div>
                    <span className={time === allDay.select ? 'active' : 'disable'} 
                    onClick={() => setTime(allDay.select)}
                    >
                        {allDay.select}
                    </span>
                    <span>{allDay.description}</span>
                </div>

                { threeDays && 
                    <div>
                        <span className={time === threeDays.select ? 'active' : 'disable'} 
                        onClick={() => setTime(threeDays.select)}
                        >
                            {threeDays.time}
                        </span>
                        <span>{threeDays.description}</span>
                    </div>
                }

                { longerTime &&
                <div className='time-select'>
                    <div>
                    <label>{longer.time}</label>
                    <select name='longerTime' defaultValue="default" onChange={(e) => setTime(e.target.value)}>
                        <option value="default" disabled>How many days?</option>
                        {longer.select.map((item, index) => (
                            <option key={index} value={item}>{index + 2}</option>
                        ))}
                    </select>
                    </div>
                    <span>{longer.description}</span>
                </div>
                }
            </div>
        </div>
    );
};