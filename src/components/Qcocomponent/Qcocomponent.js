import React from 'react';
import './Qcocomponent.css';

const Qcocomponent = (props) =>{
        return(
                <div className="Qcocomponent">
                    <div>
                        {/* <p>Planned time:{''}</p> */}
                    </div>
                    <div className="QCBasic">
                        <label>Style number: </label><span><strong>{props.styleNumber}</strong></span>
                        <label>Module number: </label><span><strong>ST {props.moduleNumber}</strong></span>
                        <label>Number of machines from belt: </label><span><strong>{props.numberOfMachinesFromBelt}</strong></span>
                    </div>
                    <div className="QCVary">
                        <p>Number of machines set by the mechanic: <strong>{props.numberOfSetMachines}</strong></p>
                        <p>Number of machines checked by the GL: <strong>{props.numberOfCheckedMachines}</strong></p>
                    </div>
                    <div className="QCStatus">
                        <label>QCO cut status : </label><span>Some input</span>
                        <label>QCO pack status : </label><span>Some input</span>
                    </div>

                </div>
        );
    }

export default Qcocomponent;