import React from 'react';
import PropTypes from 'prop-types';
import { Container, InputField } from './style'
import { Theme } from '../../styles/theme'

import { MdMail } from 'react-icons/md'


const Input = ({ icon, placeholder, value }) => {
    return (
        <Container>
            {icon}
            <InputField
                fontSize={'16px'}
                placeholder={placeholder}
                value={value}
            />
        </Container>
    );
}

Input.defaultProps = {

}

Input.propTypes = {

}

export default Input;