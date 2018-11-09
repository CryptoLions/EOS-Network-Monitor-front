import styled from 'styled-components';
import Flag from 'react-world-flags';

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

export const Tdata = Cell.extend`
  width: 100px;
  min-width: 100px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

// Cell
export const LocationCell = Cell.extend`
  width: 165px;
  min-width: 165px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const VotesCell = Cell.extend`
  width: 135px;
  min-width: 135px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const MissedBlocksCell = Cell.extend`
  width: 190px;
  min-width: 190px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const MissedBlocksAllTimeCell = Cell.extend`
  width: 155px;
  min-width: 155px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const OrgNameCell = Cell.extend`
  width: 200px;
  min-width: 200px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const NameCell = Cell.extend`
  width: 220px;
  min-width: 220px;
  position: sticky;
  left: 0;
  top: 0;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const AddressCell = Cell.extend`
  width: 180px;
  min-width: 180px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const VersionCell = Cell.extend`
  font-weight: 600;
  color: ${({ color }) => color || '#3b3e43'};
  background: ${({ backgroundColor }) => backgroundColor};
  min-width: 115px;
`;

export const ArrowCell = Cell.extend`
  padding-right: 10px;
  width: 22px;
  min-width: 22px;
  cursor: pointer;
  background: ${({ backgroundColor }) => backgroundColor};

  & svg path {
    fill: #757575;
  }

  &:hover svg path {
    fill: #548afd;
  }
`;

// Ping
export const PingCell = Cell.extend`
  width: 130px;
  min-width: 130px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const PingSpan = styled.span`
  font-size: 11px;
  color: ${({ isPingUptated }) => (isPingUptated ? '#000' : '#84878b')};
`;

export const StyledSpan = styled.span`
  color: ${props => props.color};
`;

// time ago
export const TimeAgoCell = Cell.extend`
  width: 90px;
  min-width: 90px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const TimeAgoBlock = styled.div`
  white-space: nowrap;
  overflow: hidden;
  background: ${({ backgroundColor }) => backgroundColor};
`;

// Others
export const StyledFlag = styled(Flag)`
  margin-right: 10px;
  width: 26.6px;
  max-height: 20px;
`;

export const NameBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const BpImage = styled.img`
  height: 25px;
  width: 25px;
`;

export const ImageBackup = styled.div`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`;

export const LabelWrapper = styled.div`
  padding-left: 10px;
  width: 20px;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Index = styled.div`
  padding-left: 10px;
  width: 46px;
  min-width: 46px;
`;

export const TextSpan = styled.span`
  position: relative;
  bottom: 6px;
  font-size: 11px;
  color: #84878b;
`;

export const DetailsTextSpan = TextSpan.extend`
  position: relative;
  bottom: 6px;
  font-size: 8px;
  color: #3b3e43;
`;

export const TextLink = styled.a`
  display: inline-block;
  padding-right: 5px;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Svg
export const SvgDownArrow = styled.svg`
  width: 12px;
  height: 12px;
  ${({ isArrowClicked }) =>
    isArrowClicked && {
      transform: 'rotate(180deg)',
    }};
`;

export const SvgExternalLink = styled.svg`
  cursor: pointer;
  width: 12px;
  height: 12px;

  & path {
    fill: #757575;
  }

  &:hover path {
    fill: #548afd;
  }
`;
