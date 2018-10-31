import styled from 'styled-components';
import Select from 'react-select';
import { Input, HeadContainer } from '../styles';

export const ApiInput = Input.extend`
  width: 50%;
  min-width: 50%;
  max-width: none;
  margin-bottom: 5px;

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

export const StyledSelect = styled(Select)`
  margin-left: -1px;
  width: 90%;

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 5px;
  }

  & > div:first-of-type {
    height: 45px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0;
  }
`;

export const HeadContainerBI = HeadContainer.extend`
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputsContainer = HeadContainer.extend`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputsJson = styled.div`
  padding: 0 20px;
`;

export const PreWrapper = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
`;
