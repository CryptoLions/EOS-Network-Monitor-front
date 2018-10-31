// Core
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

// Styles
import { Header, HeadBox, HeadText } from '../styles';
import { Main, PreWrapper } from './styles';

@translate()
export default class ErrorMessage extends PureComponent {
  componentDidMount() {
    window.location.hash = `errorMessage`;
  }

  componentWillUnmount() {
    const yScroll = window.pageYOffset;
    window.location.hash = ``;
    window.scroll(0, yScroll);
  }

  render() {
    const { t, data } = this.props;
    const { errorMessage, statusCode } = data;

    return (
      <Fragment>
        <Header>
          <HeadBox>
            <HeadText>{t('i18nModal.i18nErrorMessage.title')}</HeadText>
          </HeadBox>
        </Header>
        <Main>
          <PreWrapper>{errorMessage}</PreWrapper>
          {statusCode && <div>{statusCode}</div>}
        </Main>
      </Fragment>
    );
  }
}

ErrorMessage.propTypes = {
  t: PropTypes.func,
  data: PropTypes.object,
};
