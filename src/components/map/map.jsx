import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

export class MapSection extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id="map" style={{height: 100 + `%`}}></div>);
  }

  componentDidMount() {
    const {offers} = this.props;

    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const mapLeaf = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    mapLeaf.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(mapLeaf);

    return offers.map((item) => {
      return leaflet.marker(item.position, {icon}).addTo(mapLeaf);
    });
  }
}

MapSection.propTypes = {
  offers: PropTypes.array,
};