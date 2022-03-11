import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Sticker = styled.div`
  position: absolute;
  right: 40rem;
  bottom: 15rem;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-20deg);
  p {
    font-size: 1.3rem;
    padding: 2rem;
    text-align: center;
  }
`;
