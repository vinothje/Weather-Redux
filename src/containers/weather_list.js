import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(city) {
        const temp = city.list.map(weather => weather.main.temp);
        const pressure = city.list.map(weather => weather.main.pressure);
        const humidity = city.list.map(weather => weather.main.sea_level);

        return (
            <tr key={city.city.name}>
                <td>
                    <GoogleMap lat={city.city.coord.lat} lon={city.city.coord.lon} />
                </td>
                <td>
                    <Chart data={temp} color="red" />
                </td>
                <td>
                    <Chart data={pressure} color="blue" />
                </td>
                <td>
                    <Chart data={humidity} color="green"/>
                </td>
            </tr>
        )
    }
    render() {
        return (
          <table className="table table-hover">
              <thead>
                <tr>
                    <th>
                        City
                    </th>
                    <th>
                        Temperature
                    </th>
                    <th>
                        Pressure
                    </th>
                    <th>
                        Humidity
                    </th>
                </tr>
              </thead>
              <tbody>
              {this.props.weather.map(this.renderWeather)}
              </tbody>
          </table>
        );
    }
}

function mapStateToProps({weather}) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);
