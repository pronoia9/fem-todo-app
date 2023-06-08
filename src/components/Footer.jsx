import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <Text>Drag and drop to reorder list.</Text>
    </Container>
  );
}

const Container = styled.div`
  color: var(--color-text-1);
  letter-spacing: -0.2px;
  line-height: 1.75rem;
  text-align: center;
  transition: color 1s ease-in-out;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  font-size: 1.75rem;
`;