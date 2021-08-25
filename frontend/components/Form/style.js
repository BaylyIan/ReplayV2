import styled from 'styled-components'
import { SMALL, MED, LARGE, XLARGE} from '../../utils/constants'
import { Theme } from '../../styles/theme'

export const Container = styled.div`
    width:70%;
    max-width:400px;
    height:auto;
    display:flex;
    flex-direction:column;
    /* border:1px solid red; */
    @media (max-width: ${MED}) {
    width:90%;
}
`;