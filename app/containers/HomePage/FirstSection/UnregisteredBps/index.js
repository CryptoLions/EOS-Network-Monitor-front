// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

// Components
import TableRow from './TableRow';

// Styles
import { Wrapper, Header, HeaderSpan } from '../styles';
import { Container, TableHead, Tdata } from './styles';

@translate()
export default class UnregisteredBps extends PureComponent {
  render() {
    const { t, unregisteredBps } = this.props;

    return (
      <Wrapper>
        <Header>
          <HeaderSpan>{t('i18nFirstSection.i18nUnregisteredBps.title')}</HeaderSpan>
        </Header>
        <Container>
          <table>
            <TableHead>
              <tr>
                <Tdata>BP Name</Tdata>
                <Tdata>Date and Time of Unregistration</Tdata>
              </tr>
            </TableHead>
            <tbody>
              {unregisteredBps.map(bp => (
                <TableRow blockProducer={bp} />
              ))}
            </tbody>
          </table>
        </Container>
      </Wrapper>
    );
  }
}

UnregisteredBps.propTypes = {
  t: PropTypes.func,
  unregisteredBps: PropTypes.array,
};
