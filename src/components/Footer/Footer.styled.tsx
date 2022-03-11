import styled from 'styled-components';
import { flex } from '../../styles/shared';

export const Wrapper = styled.footer`
  height: 4rem;
  padding: 0 5rem 2rem 5rem;
  align-items: center;
  justify-content: space-between;
  ${flex}
`;

export const Author = styled.div`
  color: var(--color-text-primary);
`;
export const CopyRights = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: var(--color-text-primary);

  span {
    font-weight: bold;
    font-size: 1.6rem;
    color: inherit;
  }
`;
