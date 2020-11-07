
import React, { useState } from 'react';
import Pop from './pop';


function Cv(props) {
    const[is_selected, setSelected] = useState(props.default);
    const[is_unl, setUnl] = useState(false);

    return(
        <div style= {{ display: "inline-block", margin: "0 20px" }}>
            <div className="Version">{props.name}</div>
            <div className="version">{is_selected}</div>
            <button className="button" onClick={() => {
                setUnl(true);
                console.log(is_unl);

            }}
            > Select {props.name}</button>

            {is_unl ? (
                <Pop
                  status={is_unl}
                  selected = {is_selected}
                  set_selected = {setSelected}
                  set_isunl = {setUnl}
                  type = {props.name}
                  list = {props.popcontent}
                />

            ): null}
        </div>
    );

}



export default Cv;