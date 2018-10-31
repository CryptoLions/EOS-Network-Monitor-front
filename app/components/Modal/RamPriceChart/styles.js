import styled from 'styled-components';
import Select from 'react-select';

export const Main = styled.main`
  padding: 0 20px 20px;
`;

export const HeadContainer = styled.div`
  padding: 20px 20px 0 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSelect = styled(Select)`
  width: 120px;
`;

export const Title = styled.span`
  font-size: 17px;
`;
