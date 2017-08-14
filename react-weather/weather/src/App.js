import React, { Component } from 'react';
import 'bootswatch/yeti/bootstrap.css';
import './App.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';

const PLACES = [
  { name: 'Hurzuf', zip: '707860' },
  // {name: "San Jose", zip: "94040"},
  // {name: "Santa Cruz", zip: "95062"},
  // {name: "Reynosa", zip: "35203"}
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
      activeTab: 0,
      data: [
        {
          title: 'Fahrenheit',
        },
        {
          title: 'Celsius',
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const activePlace = this.state.activePlace;
    const activeTab = this.state.activeTab;
    return (
      <div>
        <Navbar>
          <Navbar.Brand>React Simple Weather App</Navbar.Brand>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) =>
                  <NavItem key={index} eventKey={index}>
                    {' '}{place.name}{' '}
                  </NavItem>,
                )}
              </Nav>
              <h3>Select system value</h3>
              <Tabs
                tabs={this.state.data}
                activeTab={this.state.activeTab}
                onTabClick={this.handleClick}
              />
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay
                key={activePlace}
                zip={PLACES[activePlace].zip}
                system={activeTab}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
    const zip = this.props.zip;
    const URL =
      'http://api.openweathermap.org/data/2.5/weather?id=' +
      zip +
      '&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial';
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }

  render() {
    const weatherData = this.state.weatherData;
    const systemCelsius = this.props.system;

    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = 'http://openweathermap.org/img/w/' + weather.icon + '.png';
    const toCelcius = (value, systemCelsius) => {
      if (systemCelsius) {
        return Math.round((value - 32) * 5 / 9) + ' °C';
      } else {
        return value + ' °F';
      }
    };

    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>
          Current: {toCelcius(weatherData.main.temp, systemCelsius)}
        </p>
        <p>
          High: {toCelcius(weatherData.main.temp_max, systemCelsius)}
        </p>
        <p>
          Low: {toCelcius(weatherData.main.temp_min, systemCelsius)}{' '}
        </p>
        <p>
          Wind Speed: {weatherData.wind.speed} mi/hr
        </p>
      </div>
    );
  }
}

class Tabs extends Component {
  supplyIndex(index) {
    this.props.onTabClick(index);
  }

  render() {
    const { activeTab } = this.props;
    const tabs = this.props.tabs.map((tab, index) => {
      return (
        <li
          className={`tab ${activeTab === index ? 'active' : ''}`}
          key={index}
        >
          <a href="#" onClick={this.supplyIndex.bind(this, index)}>
            {tab.title}
          </a>
        </li>
      );
    });
    return (
      <ul className="nav nav-pills">
        {tabs}
      </ul>
    );
  }
}

export default App;
