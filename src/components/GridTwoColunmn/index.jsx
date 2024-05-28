import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColum = ({ title, text, image, bg = false }) => {
  return (
    <SectionBackground bg={bg}>
      <Styled.Container bg={bg}>
        <Styled.TextContainer>
          <Heading uppercase>{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={image} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColum.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  image: P.string.isRequired,
  bg: P.bool,
};