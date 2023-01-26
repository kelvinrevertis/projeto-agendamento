import * as C from './styles'

type CardProps = {
    title: string;
    text: string
}

export const Card = ({ title, text } : CardProps) => (
    <C.CardContainer>
      <C.CardTitle >{title}</C.CardTitle>
      <C.CardText>{text}</C.CardText>
    </C.CardContainer>
  );
  
