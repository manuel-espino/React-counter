import React from 'react';

const Button = (props) => {
      const {value, style} = props;
      return(
            <button className={props.style}>{props.value}</button>
      );
}
export default Button;