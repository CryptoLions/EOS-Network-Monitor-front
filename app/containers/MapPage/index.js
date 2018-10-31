// Core
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Selectors
import { selectProducers } from '../../bus/producers/selectors';

// Utils
import renderEnhancer from '../../hoc/renderEnhancer';

// Components
import MapContainer from './MapContainer';
import Footer from '../../components/Footer';

// Styles
import { DummyDiv } from './styles';

const mapStateToProps = createStructuredSelector({
  producers: selectProducers(),
});

@connect(mapStateToProps)
class MapPage extends PureComponent {
  render() {
    const { producers } = this.props;
    const topProducers = producers.slice(0, 21);
    return (
      <Fragment>
        {topProducers.length ? <MapContainer topProducers={topProducers} /> : <DummyDiv />}
        <Footer path="/easteregg" mapPath="/" />
      </Fragment>
    );
  }
}

export default renderEnhancer(MapPage);

MapPage.propTypes = {
  producers: PropTypes.array,
};
