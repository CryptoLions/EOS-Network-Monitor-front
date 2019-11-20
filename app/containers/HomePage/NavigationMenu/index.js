// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import store from 'store';

// Svg
import { SvgMenuButton } from './svg';
import { /* DownArrow, */ ExternalLink } from './svg/arrow';

// Styles
import {
  Container,
  Header,
  Headlink,
  LogoImage,
  SwitcherWrapper,
  LanguageSwitcher,
  BlurBG,
  NavMenu,
  Border,
  BlueLink,
} from './styles';

// Images
import logo from '../../../assets/images/lynx.png';

@translate()
export default class NavigationMenu extends PureComponent {
  state = {
    isNavMenuActive: false,
    // isLogoActive: false,
  };

  componentDidUpdate() {
    if (this.state.isNavMenuActive) {
      window.addEventListener('resize', this.onResizeWindow);
    } else {
      window.removeEventListener('resize', this.onResizeWindow);
    }
  }

  onResizeWindow = () => window.innerWidth > 768 && this.toggleNavMenuHandler();

  toggleNavMenuHandler = () => this.setState(({ isNavMenuActive }) => ({ isNavMenuActive: !isNavMenuActive }));

  toggleModalHandler = (modalName, data) => () => {
    if (this.state.isNavMenuActive) this.toggleNavMenuHandler();
    this.props.toggleModal(modalName, data);
  };

  changeLanguage = (lng, shortLng) => () => {
    store.set('eosMonitor_currentLanguage', shortLng);
    this.props.i18n.changeLanguage(lng);
  };

  /* toggleLogoHandler = () => {
    this.setState(prevState => ({
      isLogoActive: !prevState.isLogoActive,
    }));
  }; */

  // <LogoImage src={logo} alt="Logo" />

  render() {
    const { isNavMenuActive /* isLogoActive */ } = this.state;
    const { t } = this.props;
    return (
      <Container>
        <Header>
          <SvgMenuButton toggleNavMenuHandler={this.toggleNavMenuHandler} />
          <LogoImage src={logo} alt="Logo" style={{ width: '40px' }} />
          <Headlink href="/">{t('i18nNavigationMenu.headLink')}</Headlink>
        </Header>
        <SwitcherWrapper isNavMenuActive={isNavMenuActive}>
          <LanguageSwitcher onClick={this.changeLanguage('en-US', 'en')}>En</LanguageSwitcher>
          <LanguageSwitcher onClick={this.changeLanguage('ru-RU', 'ru')}>Ru</LanguageSwitcher>
          <LanguageSwitcher onClick={this.changeLanguage('zh-CN', 'zh')}>Cn</LanguageSwitcher>
        </SwitcherWrapper>
        {isNavMenuActive && <BlurBG onClick={this.toggleNavMenuHandler} />}
        <NavMenu isNavMenuActive={isNavMenuActive}>
          <BlueLink onClick={this.toggleModalHandler('accountInfo', null)}>
            {t('i18nNavigationMenu.accountInfo')}
          </BlueLink>
          <Border />
          <BlueLink onClick={this.toggleModalHandler('accountHistory', null)}>
            {t('i18nNavigationMenu.accountHistory')}
          </BlueLink>
          <Border />
          <BlueLink onClick={this.toggleModalHandler('transactions', null)}>{t('i18nNavigationMenu.txInfo')}</BlueLink>
          <Border />
          <BlueLink onClick={this.toggleModalHandler('blockInfo', 1)}>{t('i18nNavigationMenu.blockInfo')}</BlueLink>
          <Border />
          <BlueLink onClick={this.toggleModalHandler('api', 1)}>{t('i18nNavigationMenu.api')}</BlueLink>
          <Border />
          <BlueLink onClick={this.toggleModalHandler('p2p', null)}>{t('i18nNavigationMenu.p2p')}</BlueLink>
          <Border />
          <BlueLink onClick={this.toggleModalHandler('ramChart', null)}>{t('i18nNavigationMenu.ramChart')}</BlueLink>
          <Border />
          <BlueLink onClick={this.toggleModalHandler('liveTpsChart', null)}>
            {t('i18nNavigationMenu.liveTpsChart')}
          </BlueLink>
          <Border />
          <BlueLink href="https://testnet.lynxchain.io/v1/chain/get_info" target="__blank">
            {t('i18nNavigationMenu.testnet')} <ExternalLink />
          </BlueLink>
          <Border />
          <BlueLink href="https://lynxwallet.io/lynxchain" target="__blank">
            {t('i18nNavigationMenu.nodeInstallation')} <ExternalLink />
          </BlueLink>
          <Border />
          <BlueLink href="https://lynx.bloks.io" target="__blank">
            Explorer <ExternalLink />
          </BlueLink>
          <Border />
          <BlueLink onClick={this.toggleModalHandler('legend', null)}>{t('i18nNavigationMenu.legend')}</BlueLink>
        </NavMenu>
      </Container>
    );
  }
}

NavigationMenu.propTypes = {
  t: PropTypes.func,
  toggleModal: PropTypes.func,
  i18n: PropTypes.func,
};
