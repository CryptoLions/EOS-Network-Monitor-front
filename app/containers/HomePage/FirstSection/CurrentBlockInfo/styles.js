import styled from 'styled-components';
import { GreenSpan } from '../styles';

export const HeadGreenSpan = GreenSpan.extend`
  font-size: 38px;
  font-weight: normal;
`;

export const TimeGreenSpan = GreenSpan.extend`
  display: block;
  padding: 5px 0;
`;

export const PurpleSpan = GreenSpan.extend`
  color: rgb(174, 88, 198);
`;

export const GraySpan = GreenSpan.extend`
  color: #84878b;
  font-size: 14px;
  font-weight: normal;
`;

export const FooterContainer = styled.div`
  width: 100%;
`;

export const DifferenceSpan = styled.span`
  position: relative;
  bottom: 7px;
  font-size: 11px;
  color: #84878b;
`;
