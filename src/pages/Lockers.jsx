// React
import { useState } from 'react';
// Img
import lockers from '../assets/Options/lockers.jpg';
import logo from '../assets/logoB.png'
import { Orders } from '../components/Orders';

export const Lockers = () => {
    const [ view, setView ] = useState(false);
    const [ small, setSmall ] = useState(0);

    return(
        <div className="lockers">
            <div className='lockers_img'>
                <img src={lockers} alt="img/lockers" />
            </div>

            <div className='lockers_line'></div>

            <div className='lockers_contents'>
                <div className='lockers_contents-logo'>
                    <img src={logo} alt="img/logo" />
                </div>

                { view &&
                <div className='lockers_contents-first'>
                    <h2>For how long would you like to storage your belongings?</h2>
                    <h3>¿Por cuánto tiempo le gustaría almacenar sus pertenencias?</h3>

                    <div className='lockers_time'>
                        <div>
                            <span>2H</span>
                            <span>2 horas</span>
                        </div>

                        <div>
                            <span>All day</span>
                            <span>Todo el dia</span>
                        </div>

                        <div className='lockers_time-select'>
                            <label>Longer time</label>
                            <select name='longerTime' defaultValue="default">
                                <option value="default" disabled>How many days?</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                                <option value="">7</option>
                                <option value="">8</option>
                                <option value="">9</option>
                                <option value="">10</option>
                            </select>
                            <span>Mucho mas tiempo</span>
                        </div>
                    </div>
                </div>
                }

                {
                <div className='lockers_contents-second'>
                    <h2>How many pieces?</h2>
                    <h3>¿Cuantas piezas?</h3>

                    <div>
                        <div>
                            <span>Small</span>
                            <Orders type={small} setType={setSmall} />
                        </div>

                        <div>
                            <div>
                                <span>Bags and backpacks</span>
                                <span>Mochilas y/o bolas</span>
                            </div>
                            <span>5€</span>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span>Medium</span>
                            <Orders type={small} setType={setSmall} />
                        </div>

                        <div>
                            <div>
                                <span>Cabins / Carry-On</span>
                                <span>Equipaje de cabina</span>
                            </div>
                            <span>8€</span>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span>Normal</span>
                            <Orders type={small} setType={setSmall} />
                        </div>

                        <div>
                            <div>
                                <span>Suitcase / Checked luggage</span>
                                <span>Maleta chequeada</span>
                            </div>
                            <span>10€</span>
                        </div>
                    </div>


                </div>
                }

            </div>
        </div>
    );
};