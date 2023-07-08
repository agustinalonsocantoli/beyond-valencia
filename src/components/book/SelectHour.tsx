interface Props {
    type: string;
    time: string | null;
    setTime: (action: string) => void;
    selectedValue: string | null;
    hour: string;
}

export const SelectHour = (props: Props) => {
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