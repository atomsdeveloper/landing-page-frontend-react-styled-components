import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '@storybook/blocks';

export const LogoLink = ( {text, image='', link} ) => {
    return (
        <Heading size='default' upperCase>
            <Styled.Container href={link}>
                {!!image && (
                    <img src={image} alt={text} />
                )}
                {!image && (
                    {text}
                )}
            </Styled.Container>
        </Heading>
    );
};
LogoLink.propTypes = {
    text: P.string.isRequired,
    image: P.string,
    link: P.string.isRequired
};