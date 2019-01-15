// Core
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

// Eslint
/* eslint jsx-a11y/label-has-for:0 */

// Components
import TimeAgo from '../../../../../components/TimeAgo';
import ServerAddress from '../../../../../components/ServerAddress';
import DetailsRow from '../DetailsRow';

// Utils
import { formatNumber } from '../../../../../utils/intUtils';
import getColorByVersion from '../../../../../utils/getColorByVersion';

// Svg
import { DownArrow, ExternalLink } from './svg';

// Styles
import {
  Trow,
  Tdata,
  // cells
  LocationCell,
  VotesCell,
  MissedBlocksCell,
  MissedBlocksAllTimeCell,
  OrgNameCell,
  // Ping
  PingCell,
  PingSpan,
  StyledSpan,
  NameCell,
  TimeAgoCell,
  ArrowCell,
  VersionCell,
  AddressCell,
  // Others
  StyledFlag,
  NameBlock,
  NameWrapper,
  BpImage,
  ImageBackup,
  LabelWrapper,
  LocationWrapper,
  Index,
  TextSpan,
  ReregisteredSpan,
  TextLink,
  TimeAgoBlock,
} from './styles';
import { Checkbox, StyledCheckbox, StyledCheckboxActive } from '../styles';

export default class TableRow extends PureComponent {
  state = {
    isArrowClicked: false,
    isPingUptated: false,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.producer && this.props.producer.ping !== nextProps.producer.ping) {
      this.setState({ isPingUptated: true });

      setTimeout(() => this.setState({ isPingUptated: false }), 1000);
    }
  }

  getProducerImage = () => {
    const { producer } = this.props;
    if (
      /*! producer ||
      !producer.bpData ||
      !producer.bpData.org ||
      !producer.bpData.org.branding ||
      !producer.bpData.org.branding.logo_256 */
      !producer.logoCached
    ) {
      return '';
    }
    // const url = producer.bpData.org.branding.logo_256;
    const url = process.env.API_URL + producer.logoCached;
    // if (url.indexOf('https') < 0) return url.replace('http', 'https');
    return url;
  };

  getProducerUrl = () => {
    const { producer } = this.props;

    if (
      !producer.organizationUrl ||
      producer.organizationUrl.length < 5 ||
      ['dev.cryptoions.io', 'eosnetworkmonitor.io'].indexOf(producer.organizationUrl) !== -1
    )
      return '--';

    if (producer.organizationUrl === 'cryptolions.io') return 'CryptoLions.io';

    if (producer.organizationUrl.indexOf('http') !== 0) return `http://${producer.url}`;

    return producer.organizationUrl;
  };

  versionColorsHandler = backgroundColor => {
    const { producer } = this.props;
    if (
      producer.version &&
      producer.endpoints &&
      producer.endpoints[0] &&
      producer.endpoints[0].server_version_string
    ) {
      const version = parseInt(`0x${producer.version}`, 16);
      return (
        <VersionCell backgroundColor={backgroundColor} color={getColorByVersion(version)}>
          {producer.endpoints[0].server_version_string}
        </VersionCell>
      );
    }
    return <VersionCell backgroundColor={backgroundColor} />;
  };

  extractCorrectAddress = nodes => {
    if (!nodes) {
      return '';
    }
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      const [p2pHostname] = (node.p2p_server_address || '').split(':');
      if (p2pHostname) {
        return p2pHostname;
      }
      const [httpHostname] = (node.http_server_address || '').split(':');
      if (httpHostname) {
        return httpHostname;
      }
      const [httpsHostname] = (node.https_server_address || '').split(':');
      if (httpsHostname) {
        return httpsHostname;
      }
    }
    return '';
  };

  pingColorsHandler = () => {
    const { producer } = this.props;

    if (producer.ping) {
      return <StyledSpan color={producer.ping > 1000 ? '#f2d24b' : undefined}>{`${producer.ping}ms`}</StyledSpan>;
    }
    return <StyledSpan color="#ff5456">--</StyledSpan>;
  };

  publicEndpointsHandler = workingEndpointsNumber => {
    const { endpoints } = this.props.producer;

    if (endpoints && endpoints.length) {
      const diff = endpoints.length - workingEndpointsNumber;
      if (diff > 0) {
        return (
          <StyledSpan color={diff === endpoints.length ? '#ff5456' : '#f2d24b'}>{`${workingEndpointsNumber} of ${
            endpoints.length
          }`}</StyledSpan>
        );
      }
      return `${workingEndpointsNumber} of ${endpoints.length}`;
    }
    return '--';
  };

  countWorkingEndpoints = endpoints => (endpoints ? endpoints.filter(endpoint => endpoint.isWorking).length : null);

  blkSeenColorsHandler = () => {
    const { producer, headBlockNum } = this.props;
    const difference = headBlockNum - producer.answeredBlock;
    let color;
    if (difference > 252) {
      color = '#ff5456';
    } else if (difference > 126) {
      color = '#f2d24b';
    }
    return <StyledSpan color={color}>{formatNumber(producer.answeredBlock)}</StyledSpan>;
  };

  extractCorrectP2pPort = nodes => {
    if (!nodes) {
      return '';
    }
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      const port = (node.p2p_server_address || '').split(':')[1];
      if (port && port.length > 0) {
        return port;
      }
    }
    return '';
  };

  toggleProducerSelection = e => {
    const { producer, toggleProducerSelection } = this.props;

    toggleProducerSelection(producer.name, e.target.checked);
  };

  toggleArrowRotate = () => this.setState(({ isArrowClicked }) => ({ isArrowClicked: !isArrowClicked }));

  render() {
    const { isPingUptated, isArrowClicked } = this.state;
    const {
      producer,
      index,
      tableColumnState,
      toggleModal,
      isNodeChecked,
      colsNumber,
      isTableScrolled,
      lastHash,
      reregistered,
    } = this.props;
    const node = producer.nodes && producer.nodes.length ? producer.nodes[0] : {};
    const { nodes } = producer;
    const countryCode = node.location ? node.location.split(',')[0] : null;

    const producerUrl = this.getProducerUrl();
    const p2pPort = this.extractCorrectP2pPort(nodes);
    const address = this.extractCorrectAddress(nodes);
    const producerImage = this.getProducerImage();

    const workingEndpointsNumber = this.countWorkingEndpoints(producer.endpoints);
    const mostEndpointsAreDown =
      workingEndpointsNumber && producer.endpoints.length / 2 <= producer.endpoints.length - workingEndpointsNumber;

    let backgroundColor = 'rgba(255, 255, 255, 0.7)';
    if (producer.isCurrentNode) backgroundColor = 'rgba(17, 168, 39, 0.7)';
    if ((!producer.isNode && index < 61) || reregistered) backgroundColor = 'rgb(211, 211, 211)';
    if (mostEndpointsAreDown) backgroundColor = 'rgba(255, 255, 155, 0.7)';
    if (producer.isUnsynced) backgroundColor = 'rgb(159, 100, 227)';
    if (producer.responseIsBad) backgroundColor = 'rgba(238, 118, 0, 0.7)';
    if (producer.missedProducing) backgroundColor = 'rgba(255, 4, 4, 0.7)';

    let backgroundColorFixedCell = 'rgba(255, 255, 255, 0.7)';

    if (isTableScrolled) {
      backgroundColorFixedCell = '#fff';
      if (producer.isCurrentNode) backgroundColorFixedCell = 'rgb(17, 168, 39)';
      if ((!producer.isNode && index < 61) || reregistered) backgroundColorFixedCell = 'rgb(211, 211, 211)';
      if (mostEndpointsAreDown) backgroundColorFixedCell = 'rgb(255, 255, 155)';
      if (producer.isUnsynced) backgroundColorFixedCell = 'rgb(159, 100, 227)';
      if (producer.responseIsBad) backgroundColorFixedCell = 'rgb(238, 118, 0)';
      if (producer.missedProducing) backgroundColorFixedCell = 'rgb(255, 4, 4)';
    }

    return (
      <Fragment>
        <Trow>
          {/* {#} {1.Name} */}
          <NameCell backgroundColor={isTableScrolled ? backgroundColorFixedCell : backgroundColor}>
            <NameBlock>
              <LabelWrapper>
                <label>
                  <Checkbox type="checkbox" checked={isNodeChecked} onChange={this.toggleProducerSelection} />
                  {isNodeChecked ? <StyledCheckboxActive /> : <StyledCheckbox />}
                </label>
              </LabelWrapper>
              <Index>{producer.index + 1}</Index>
              <NameWrapper>
                <ImageBackup>{producer.logoCached && <BpImage src={producerImage} />}</ImageBackup>
                <TextLink onClick={() => toggleModal('accountInfo', producer.name)}>{producer.name}</TextLink>
                <ExternalLink link={producerUrl} />
                {reregistered && <ReregisteredSpan>re-registered</ReregisteredSpan>}
              </NameWrapper>
            </NameBlock>
          </NameCell>
          {tableColumnState.ping && (
            <PingCell backgroundColor={backgroundColor}>
              <PingSpan isPingUptated={isPingUptated}>{this.pingColorsHandler()}</PingSpan>
            </PingCell>
          )}
          {/* {2.Answered} */}
          {tableColumnState.answered && (
            <TimeAgoCell backgroundColor={backgroundColor}>
              <TimeAgoBlock>
                <TimeAgo value={producer.answeredTimestamp} type="answered" />
              </TimeAgoBlock>
            </TimeAgoCell>
          )}
          {/* {3.Blk seen} */}
          {tableColumnState.blkSeen && <Tdata backgroundColor={backgroundColor}>{this.blkSeenColorsHandler()}</Tdata>}
          {/* {4.Produced} */}
          {tableColumnState.produced && (
            <TimeAgoCell backgroundColor={backgroundColor}>
              <TimeAgoBlock>
                {producer.isCurrentNode ? '0sec' : <TimeAgo value={producer.producedTimestamp} />}
              </TimeAgoBlock>
            </TimeAgoCell>
          )}

          {/* {5.Blk produced} */}
          {tableColumnState.blkProduced && (
            <Tdata backgroundColor={backgroundColor}>{formatNumber(producer.producedBlock)}</Tdata>
          )}
          {/* {6.Version} */}
          {tableColumnState.version && this.versionColorsHandler(backgroundColor)}
          {/* {7.Address} */}
          {tableColumnState.address && <AddressCell backgroundColor={backgroundColor}>{address}</AddressCell>}
          {/* {8.HTTP} */}
          {tableColumnState.http && (
            <Tdata backgroundColor={backgroundColor}>
              <ServerAddress nodes={nodes} />
            </Tdata>
          )}
          {/* {9.P2P} */}
          {tableColumnState.p2p && <Tdata backgroundColor={backgroundColor}>{p2pPort}</Tdata>}
          {/* {10.Location} */}
          {tableColumnState.location && (
            <LocationCell backgroundColor={backgroundColor}>
              <LocationWrapper>
                {countryCode && <StyledFlag code={countryCode} />}
                {node.location}
              </LocationWrapper>
            </LocationCell>
          )}
          {/* {11.# produced} */}
          {tableColumnState.numberProduced && <Tdata backgroundColor={backgroundColor}>{producer.produced}</Tdata>}
          {/* {12.# TXs} */}
          {tableColumnState.txs && <Tdata backgroundColor={backgroundColor}>{producer.tx_count}</Tdata>}
          {/* {13.Org Name} */}
          {tableColumnState.organisation && (
            <OrgNameCell backgroundColor={backgroundColor}>
              <TextLink href={producerUrl} target="_blank" rel="noopener noreferrer">
                {node.organisation}
              </TextLink>
            </OrgNameCell>
          )}
          {/* {14.Votes} */}
          {tableColumnState.votes && (
            <VotesCell backgroundColor={backgroundColor}>
              {formatNumber(producer.votesInEOS)} <TextSpan>{`${formatNumber(producer.votesPercentage)}%`}</TextSpan>
            </VotesCell>
          )}
          {/* {15.Expected income} */}
          {tableColumnState.expectedIncome && (
            <VotesCell backgroundColor={backgroundColor}>
              {producer.expectedIncomeData && formatNumber(producer.expectedIncomeData.expectedRewardsOnThisPosition)}{' '}
            </VotesCell>
          )}
          {/* {16.Actual income} */}
          {tableColumnState.actualIncome && (
            <VotesCell backgroundColor={backgroundColor}>
              {producer.expectedIncomeData &&
                formatNumber(
                  producer.expectedIncomeData.voteRewardsForDay + producer.expectedIncomeData.expectedBlockRewardsForDay
                )}{' '}
            </VotesCell>
          )}
          {/* {17.Missed blocks (all time)} */}
          {tableColumnState.missedBlocksAll && (
            <MissedBlocksAllTimeCell backgroundColor={backgroundColor}>
              {formatNumber(producer.missedBlocksTotal)}{' '}
            </MissedBlocksAllTimeCell>
          )}
          {/* {18.Missed blocks (last round)} */}
          {tableColumnState.missedBlocksRound && (
            <MissedBlocksCell backgroundColor={backgroundColor}>
              {formatNumber(producer.missedBlocksForRound)}{' '}
            </MissedBlocksCell>
          )}
          {/* {19.Missed blocks (last 24 hours)} */}
          {tableColumnState.missedBlocksDay && (
            <MissedBlocksCell backgroundColor={backgroundColor}>
              {formatNumber(producer.missedBlocksForDay)}{' '}
            </MissedBlocksCell>
          )}
          {/* {20.Vote rewards} */}
          {tableColumnState.voteRewards && (
            <VotesCell backgroundColor={backgroundColor}>
              {producer.expectedIncomeData && formatNumber(producer.expectedIncomeData.voteRewardsForDay)}{' '}
            </VotesCell>
          )}
          {/* {21.Block rewards} */}
          {tableColumnState.blockRewards && (
            <VotesCell backgroundColor={backgroundColor}>
              {producer.expectedIncomeData && formatNumber(producer.expectedIncomeData.expectedBlockRewardsForDay)}{' '}
            </VotesCell>
          )}
          {/* {22.Total unpaid rewards} */}
          {tableColumnState.totalUnpaidRewards && (
            <VotesCell backgroundColor={backgroundColor}>
              {producer.expectedIncomeData && formatNumber(producer.expectedIncomeData.totalBlockUnpaidRewards)}{' '}
            </VotesCell>
          )}
          {/* {23.Public endpoints} */}
          {tableColumnState.publicEndpoints && (
            <VotesCell backgroundColor={backgroundColor}>
              {this.publicEndpointsHandler(workingEndpointsNumber)}{' '}
            </VotesCell>
          )}
          {/* {24.Blacklist Hash} */}
          {tableColumnState.blackListHash && (
            <Tdata backgroundColor={backgroundColor}>
              {producer.blackListHash === lastHash ? (
                <StyledSpan color="#11a827">current</StyledSpan>
              ) : (
                <StyledSpan color="#ff5456">old</StyledSpan>
              )}{' '}
            </Tdata>
          )}
          <ArrowCell backgroundColor={backgroundColor} onClick={this.toggleArrowRotate}>
            <DownArrow isArrowClicked={isArrowClicked} />
          </ArrowCell>
        </Trow>
        {isArrowClicked && (
          <DetailsRow
            colsNumber={colsNumber}
            isPingUptated={isPingUptated}
            producer={producer}
            toggleModal={toggleModal}
            producerUrl={producerUrl}
            address={address}
            p2pPort={p2pPort}
          />
        )}
      </Fragment>
    );
  }
}

TableRow.propTypes = {
  producer: PropTypes.object,
  index: PropTypes.number,
  tableColumnState: PropTypes.object,
  headBlockNum: PropTypes.number,
  toggleModal: PropTypes.func,
  toggleProducerSelection: PropTypes.func,
  isNodeChecked: PropTypes.bool,
  isTableScrolled: PropTypes.bool,
  reregistered: PropTypes.bool,
  colsNumber: PropTypes.number,
  lastHash: PropTypes.string,
};
