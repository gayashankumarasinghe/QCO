import React from 'react';
import './Qcocomponent.css';

const Qcocomponent = (props) =>{
        return(
                <div className="Qcocomponent">
                    <div>
                        {/* <p>Planned time:{''}</p> */}
                    </div>
                    <div>
                        <label>Style number: <strong>{props.styleNumber}</strong></label>
                        <label>Module number:<strong>ST {props.moduleNumber}</strong></label>
                        <br/>
                        <label>Number of machines from belt: <strong>{props.numberOfMachinesFromBelt}</strong></label>
                    </div>
                    <br></br>
                    <div>
                        <p>Number of machines set by the mechanic: <strong>{props.numberOfSetMachines}</strong></p>
                        <p>Number of machines checked by the GL: <strong>{props.numberOfCheckedMachines}</strong></p>
                    </div>
                    <label>QCO cut status</label>
                    <label>QCO pack status</label>
                </div>
        );
    }

export default Qcocomponent;