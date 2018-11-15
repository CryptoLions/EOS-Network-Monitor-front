import styled from 'styled-components';

export const Trow = styled.tr`
  padding: 0px 5px;
  border-bottom: 1px solid #dee2e6;
`;

export const Cell = styled.td`
  padding: 7px 0px;
  font-size: 12px;
  color: #3b3e43;
  text-align: center;
`;

export const DateCell = Cell.extend`
  width: 150px;
`;
