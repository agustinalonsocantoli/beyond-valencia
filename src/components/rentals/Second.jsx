import { Orders } from '../Orders';

export const Second = (props) => {
    const { 
        title, 
        subtitle, 
        small, 
        setSmall,
        medium,
        setMedium,
        normal,
        setNormal,
        data,
        product,
        time
    } = props;

    const { s, m, n } = data;
    const { h, allDay, longer, threeDays } = product;
    
    return(
        <div className='contents_second'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            <div className='type_select'>
                <div className='type_select-size'>
                    <span>{s.name}</span>
                    <Orders type={small} setType={setSmall} />
                </div>

                <div className='type_select-info'>
                    <div>
                        <span>{s.description}</span>
                        <span>{s.others}</span>
                    </div>

                    <span>
                        <span>Price per item </span>
                        {
                        h && time === h.select && h.price.small ||
                        time === allDay.select && allDay.price.small || 
                        longer && longer.select.map(item => item === time) && longer.price.small ||
                        threeDays && time === threeDays.select && threeDays.price.small
                        }€
                    </span>
                </div>
            </div>

            <div className='type_select'>
                <div className='type_select-size'>
                    <span>{m.name}</span>
                    <Orders type={medium} setType={setMedium} />
                </div>

                <div className='type_select-info'>
                    <div>
                        <span>{m.description}</span>
                        <span>{m.others}</span>
                    </div>
                    
                    <span>
                        <span>Price per item </span>
                        {
                        h && time === h.select && h.price.medium ||
                        time === allDay.select && allDay.price.medium || 
                        longer && longer.select.map(item => item === time) && longer.price.medium ||
                        threeDays && time === threeDays.select && threeDays.price.medium
                        }€
                    </span>
                </div>
            </div>

            <div className='type_select'>
                <div className='type_select-size'>
                    <span>{n.name}</span>
                    <Orders type={normal} setType={setNormal} />
                </div>

                <div className='type_select-info'>
                    <div style={{width: '50%'}}>
                        <span>{n.description}</span>
                        <span>{n.others}</span>
                    </div>
                    
                    <span>
                        <span>Price per item </span>
                        {
                        h && time === h.select && h.price.normal ||
                        time === allDay.select && allDay.price.normal || 
                        longer && longer.select.map(item => item === time) && longer.price.normal ||
                        threeDays && time === threeDays.select && threeDays.price.normal
                        }€
                    </span>
                </div>
            </div>
        </div>
    );
};