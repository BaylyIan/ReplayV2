import React from 'react';
import PropTypes from 'prop-types';

//comps
import Input from '../Input'
import { Container } from './style'

//icons
import { MdMail, MdLock } from 'react-icons/md'
import { Theme } from '../../styles/theme';

const Form = ({ }) => {
    return (
        <Container>
            <Input
                icon={<MdMail size={20} fill={Theme.colors.lightGrey} />}
                placeholder={'Username'}
            />
            <Input
                icon={<MdLock size={20} fill={Theme.colors.lightGrey} />}
                placeholder={'Password'}
            />
        </Container>
    );
}

Form.defaultProps = {

}

Form.propTypes = {

}

export default Form;