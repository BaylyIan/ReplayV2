import styled from 'styled-components'
import { SMALL, MED, LARGE, XLARGE} from '../../utils/constants'
import { Theme } from '../../styles/theme'

export const Container = styled.div`
    width:100%;
    height:51px;
    border:1px solid ${Theme.colors.lightGrey};
    box-sizing: border-box;
    border-radius: 7px;
    display:flex;
    & > input {
        width:100%;
        height:100%;
        background:none;
        color:white;
    }
`;

export const InputField = styled.input`
    border: none;
    outline: 0;
    /* border-bottom: 1px solid #D3D8DD; */
    width: 100%;
    color: ${Theme.colors.lightGrey};
    font-size: ${({ fontSize }) => fontSize};
    min-height: ${({ height }) => height};
    &:focus {
        color: ${Theme.colors.white};
    }
`;