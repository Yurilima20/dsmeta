import NotificationButtom from '../NotificationBottom'
import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';


function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date(); // ponto e vírgula no js é opcional. 

    const [minDate, setMinDate] = useState (min); 
    const [maxDate, setMaxDate] = useState (max); 

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="titulo">Vendas</h2>
                <div >
                    <div className="caixa-texto-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="caixa-texto"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="caixa-texto-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="caixa-texto"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>


                <div>
                    <table className="tabela-dsmeta">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">07/09/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="buttom-container">
                                        <NotificationButtom />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">07/09/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="buttom-container">
                                        <NotificationButtom />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">07/09/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="buttom-container">
                                        <NotificationButtom />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )

}

export default SalesCard