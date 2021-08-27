import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './style'

const Button = ({ onClick, text }) => {
    return (
        <Container onClick={onClick}>
            <p>{text}</p>
        </Container>
    );
}

Button.defaultProps = {
    onClick: () => { }
}

Button.propTypes = {

}

export default Button;