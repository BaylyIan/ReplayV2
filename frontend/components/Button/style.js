import styled from 'styled-components'
import { SMALL, MED, LARGE, XLARGE} from '../../utils/constants'
import { Theme } from '../../styles/theme'

export const Container = styled.button`
    width:100%;
    height:51px;
    border:1px solid ${Theme.colors.orange};
    box-sizing: border-box;
    border-radius: 7px;
    display:flex;
    align-items: center;
    justify-content:center;
    background:none;
    & > p{
        color:${Theme.colors.orange}
    }
`;