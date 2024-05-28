import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export const SectionBackground = ( {children, bg = false} ) => {
    return (
        <Styled.Container bg={bg}>
            <SectionContainer>
                {children}
            </SectionContainer>
        </Styled.Container>
    );
};
SectionBackground.propTypes = {
    children: P.string.isRequired,
    bg: P.bool
};