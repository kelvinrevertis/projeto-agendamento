import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
`;

