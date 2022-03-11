import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Sticker = styled.div`
  position: absolute;
  right: clamp(20rem, 6rem, 6rem);
  bottom: clamp(20rem, 8rem, 9rem);
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-20deg);
  p {
    font-size: 1.1rem;
    padding: 1.9rem;
    text-align: center;
  }
`;
