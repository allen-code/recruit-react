import styled from 'styled-components';

interface ContainerProps {
  padding?: number;
}

export const Container = styled.div<ContainerProps>`
  padding: ${props => props.padding}px;
  display:flex;
  justify-content: center;
`;
