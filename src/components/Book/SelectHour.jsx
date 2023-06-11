export const SelectHour = (props) => {
    const { type, time, setTime, selectedValue, hour } = props;

    return(
        <span
        className={(time === hour && selectedValue === type) ? 'active' : 'disable'} 
        onClick={() => {
            (selectedValue === type) &&
            setTime(hour);
        }}>
            {hour}
        </span>
    )
};