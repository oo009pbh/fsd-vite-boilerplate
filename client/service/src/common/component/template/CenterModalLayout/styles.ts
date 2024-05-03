import styled from '@emotion/styled';

export const CenterModalLayout = styled.dialog`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: ${(props) =>
    props.className === 'changeLayout'
      ? 'translate(-50%, 150%)'
      : 'translate(-50%, -50%)'};

  border: none;
  border-radius: 1rem;
  overflow-x: hidden;

  ::backdrop {
    background: rgba(0, 0, 0, 0.7);
  }
`;
