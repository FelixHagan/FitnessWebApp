import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
    const alertContext = useContext(AlertContext);

    const { alerts } = alertContext;
    return (
        
        <div className="alertcontainer">
            {alerts.length > 0 && alerts.map((alert) => (
                <div key={alert.id} className="alertbox">
                    {alert.msg}
                </div>
            ))}
        </div>
    )
}

export default Alerts;
