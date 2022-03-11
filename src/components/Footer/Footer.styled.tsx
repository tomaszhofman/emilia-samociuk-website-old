import styled from 'styled-components';
import { flex } from '../../styles/shared';
import * as mq from '../../styles/media-queries';

console.log([mq.large]);

export const Wrapper = styled.footer`
  height: 4rem;
  padding: 0 5rem 2rem 5rem;
  align-items: center;
  justify-content: space-between;
  ${flex}
`;

export const Author = styled.div`
  p {
    font-size: clamp(0.5rem, 1rem, 1.5rem);
    color: var(--color-text-secondary);
  }
`;
export const CopyRights = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: var(--color-text-primary);

  p {
    font-size: clamp(0.7rem, 1rem, 1.5rem);

    span {
      font-weight: bold;
      font-size: inherit;
      color: inherit;
    }
  }
`;
