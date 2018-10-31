// Core
import React, { PureComponent } from 'react';
import difference from 'lodash/difference';

// Styles
import { Map } from './styles';

export default class MapContainer extends PureComponent {
  state = {
    coordinates: null,
    circles: null,
  };

  async componentDidMount() {
    const { topProducers } = this.props;
    const map = new window.google.maps.Map(this.mapElement, {
      zoom: 3,
      center: { lat: 51.509865, lng: -0.118092 },
    });

    this.geocoder = new window.google.maps.Geocoder();

    const coordinates = await Promise.all(
      topProducers.map(
        producer =>
          new Promise(resolve => {
            this.getCoordinates(producer, resolve);
          })
      )
    );
    const circles = this.drawCircles(coordinates, map);

    const currentProducer = topProducers.filter(producer => producer.isCurrentNode);

    if (coordinates[currentProducer[0].index]) {
      this.drawLines(coordinates, map, currentProducer);
    }

    this.setState({
      coordinates,
      map,
      circles,
    });
  }

  async componentWillReceiveProps(nextProps) {
    const { topProducers } = this.props;
    const { coordinates, circles, map } = this.state;

    const topProducersNames = topProducers.map(producer => producer.name);
    const newTopProducers = nextProps.topProducers;
    const newTopProducersNames = newTopProducers.map(producer => producer.name);

    const currentProducer = newTopProducers.filter(producer => producer.isCurrentNode);

    const diff = difference(newTopProducersNames, topProducersNames);

    if (diff.length && circles) {
      const newCoordinates = await Promise.all(
        newTopProducers.map(
          producer =>
            new Promise(resolve => {
              this.getCoordinates(producer, resolve);
            })
        )
      );
      circles.forEach(circle => circle.setMap(null));
      const newCircles = this.drawCircles(newCoordinates, map);

      if (this.linePath) this.linePath.setMap(null);

      if (newCoordinates[currentProducer[0].index]) {
        this.drawLines(newCoordinates, map, currentProducer);
      }

      this.setState({
        coordinates: newCoordinates,
        circles: newCircles,
      });
    }

    if (coordinates && !diff.length && coordinates[currentProducer[0].index]) {
      if (this.linePath) this.linePath.setMap(null);
      this.drawLines(coordinates, map, currentProducer);
    }
  }

  // eslint-disable-next-line
  getCoordinates = (producer, resolve) => {
    const location = producer.nodes && producer.nodes.length ? producer.nodes[0].location : null;

    if (!location) return resolve(null);
    // eslint-disable-next-line
    this.geocoder.geocode({ address: location }, results => {
      if (results) {
        return results.length ? resolve(results[0].geometry.location) : resolve(null);
      }

      setTimeout(() => this.getCoordinates(producer, resolve), 1000);
    });
  };

  drawCircles = (coordinates, map) => {
    const circles = [];
    coordinates.forEach(coordinate => {
      if (coordinate) {
        const locationCircle = new window.google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map,
          center: coordinate,
          radius: 100000,
        });
        circles.push(locationCircle);
      }
    });
    return circles;
  };

  drawLines = (coordinates, map, currentProducer) => {
    const lineCoordinates = [];

    coordinates.forEach(coordinate => {
      if (coordinate) {
        lineCoordinates.push(coordinates[currentProducer[0].index]);
        lineCoordinates.push(coordinate);
      }
    });

    this.linePath = new window.google.maps.Polyline({
      path: lineCoordinates,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    this.linePath.setMap(map);
  };

  render() {
    return (
      <Map
        innerRef={el => {
          this.mapElement = el;
        }}
      />
    );
  }
}
