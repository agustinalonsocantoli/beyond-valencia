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
        data
    } = props;

    const { s, m, n } = data;
    
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
                    <span>{s.price}€</span>
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
                    <span>{m.price}€</span>
                </div>
            </div>

            <div className='type_select'>
                <div className='type_select-size'>
                    <span>{n.name}</span>
                    <Orders type={normal} setType={setNormal} />
                </div>

                <div className='type_select-info'>
                    <div>
                        <span>{n.description}</span>
                        <span>{n.others}</span>
                    </div>
                    <span>{n.price}€</span>
                </div>
            </div>
        </div>
    );
};