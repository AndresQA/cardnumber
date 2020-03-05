import React from 'react';
import PropTypes from 'prop-types';
//import './TextInput.css';

function CardNumber (props){


    const intermediate = (event) =>{
        let texto;
            props.onPress(event.target.value);
            texto = event.target.value;
            console.log(texto);
          

    }

    return (<div className="CardNumberInput">
        <input onInput={intermediate}></input>
        </div>

    );
}

CardNumber.propTypes={
    onPress: PropTypes.func,

}

export default CardNumber;