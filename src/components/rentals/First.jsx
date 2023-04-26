export const First = (props) => {
    const { title, subtitle, longerTime, setTime } = props;

    return(
        <div className='contents_first'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            <div className='contents_first-time'>
                <div>
                    <span onClick={() => setTime('2-Hours')}>2H</span>
                    <span>2 horas</span>
                </div>

                <div>
                    <span onClick={() => setTime('All-Day')}>All day</span>
                    <span>Todo el dia</span>
                </div>

                { longerTime &&
                <div className='time-select'>
                    <label>Longer time</label>
                    <select name='longerTime' defaultValue="default" onChange={(e) => setTime(e.target.value)}>
                        <option value="default" disabled>How many days?</option>
                        <option value="2-Days">2</option>
                        <option value="3-Days">3</option>
                        <option value="4-Days">4</option>
                        <option value="5-Days">5</option>
                        <option value="6-Days">6</option>
                        <option value="7-Days">7</option>
                        <option value="8-Days">8</option>
                        <option value="9-Days">9</option>
                        <option value="10-Days">10</option>
                    </select>
                    <span>Mucho mas tiempo</span>
                </div>
                }
            </div>
        </div>
    );
};