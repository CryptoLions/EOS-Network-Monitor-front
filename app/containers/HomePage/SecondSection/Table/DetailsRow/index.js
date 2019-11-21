// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import TimeAgo from '../../../../../components/TimeAgo';
import ServerAddress from '../../../../../components/ServerAddress';

// Utils
import { formatNumber } from '../../../../../utils/intUtils';

// Constants
import { API_KEY } from '../../../../../constants';

// Svg
import { ExternalLink } from '../TableRow/svg';

// Styles
import {
  Trow,
  // Ping
  PingSpanBold,
  // Details
  DetailsDiv,
  DetailsList,
  DetailsListItem,
  DetailsTextSpan,
  Map,
  MapWrapper,
  // Others
  TextLink,
  Bold,
  BoldText,
} from './styles';

export default class DetailsRow extends PureComponent {
  versionHandler = () => {
    const { producer } = this.props;
    if (producer.version) {
      return parseInt(`0x${producer.version}`, 16);
    }
    return null;
  };

  render() {
    const { colsNumber, isPingUptated, producer, toggleModal, producerUrl, address, p2pPort } = this.props;
    const node = producer.nodes && producer.nodes.length ? producer.nodes[0] : {};
    const endpoint = producer.endpoints && producer.endpoints.length ? producer.endpoints[0] : {};

    return (
      <Trow>
        <td colSpan={colsNumber + 3}>
          <DetailsDiv>
            <DetailsList>
              <DetailsListItem>
                Ping:
                <PingSpanBold isPingUptated={isPingUptated}>{`${producer.ping || '--'}ms`}</PingSpanBold>
              </DetailsListItem>
              <DetailsListItem>
                Name:
                <TextLink onClick={() => toggleModal('accountInfo', producer.name)}>
                  <BoldText>{producer.name}</BoldText>
                </TextLink>
                <ExternalLink link={producerUrl} />
              </DetailsListItem>
              <DetailsListItem>
                Answered:
                <BoldText>
                  <TimeAgo value={producer.answeredTimestamp} />
                </BoldText>
              </DetailsListItem>
              <DetailsListItem>
                Blk seen:
                <BoldText>{producer.answeredBlock}</BoldText>
              </DetailsListItem>
              <DetailsListItem>
                Produced:
                <BoldText>
                  <TimeAgo value={producer.producedTimestamp} />
                </BoldText>
              </DetailsListItem>
              <DetailsListItem>
                <TextLink onClick={() => toggleModal('bpJson', producer.name)}>
                  <Bold>lynx.json</Bold>
                </TextLink>
              </DetailsListItem>
            </DetailsList>
            <DetailsList>
              <DetailsListItem>
                Blk produced:
                <BoldText>{producer.producedBlock}</BoldText>
              </DetailsListItem>
              <DetailsListItem>
                Version:
                <BoldText>{this.versionHandler()}</BoldText>
              </DetailsListItem>
              <DetailsListItem>
                Address:
                <BoldText>{address}</BoldText>
              </DetailsListItem>
              <DetailsListItem>
                HTTP:
                <BoldText>
                  <ServerAddress nodes={producer.nodes} />
                </BoldText>
              </DetailsListItem>
              <DetailsListItem>
                P2P:
                <BoldText>{p2pPort}</BoldText>
              </DetailsListItem>
              <DetailsListItem>
                Server version string:
                <BoldText>{endpoint.server_version_string ? endpoint.server_version_string : '--'}</BoldText>
              </DetailsListItem>
            </DetailsList>
            <DetailsList>
              <DetailsListItem>
                Location:
                <BoldText>{node.location}</BoldText>
              </DetailsListItem>
              <DetailsListItem>
                # produced:
                <BoldText>{producer.produced}</BoldText>
              </DetailsListItem>
              <DetailsListItem>
                TXs
                <BoldText>{producer.tx_count}</BoldText>
              </DetailsListItem>
              <DetailsListItem>
                Org Name:
                <BoldText>
                  <TextLink href={producerUrl} target="_blank" rel="noopener noreferrer">
                    {node.organisation}
                  </TextLink>
                </BoldText>
              </DetailsListItem>
              <DetailsListItem>
                Votes:
                <BoldText>
                  {formatNumber(producer.votesInEOS)}{' '}
                  <DetailsTextSpan>{`${formatNumber(producer.votesPercentage)}%`}</DetailsTextSpan>
                </BoldText>
              </DetailsListItem>
              {producer.responseIsBad && (
                <DetailsListItem>
                  <TextLink
                    onClick={() =>
                      toggleModal('errorMessage', {
                        errorMessage: producer.errorMessage,
                        statusCode: producer.statusCode,
                      })
                    }
                  >
                    <Bold>Error message & status code</Bold>
                  </TextLink>
                </DetailsListItem>
              )}
            </DetailsList>
            <MapWrapper>
              {node.location && (
                <Map
                  src={`https://maps.googleapis.com/maps/api/staticmap?markers=${
                    node.location
                  }&zoom=2&size=170x104&scale=2&key=${API_KEY}`}
                  alt="location"
                />
              )}
            </MapWrapper>
          </DetailsDiv>
        </td>
      </Trow>
    );
  }
}

DetailsRow.propTypes = {
  colsNumber: PropTypes.number,
  isPingUptated: PropTypes.bool,
  producer: PropTypes.object,
  address: PropTypes.string,
  toggleModal: PropTypes.func,
  producerUrl: PropTypes.string,
  p2pPort: PropTypes.string,
};
