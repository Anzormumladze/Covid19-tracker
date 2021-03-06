import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchtedData = await fetchData();
    this.setState({ data: fetchtedData });
  }

  handleCountryChange = async (country) => {
    const fetchtedData = await fetchData(country);
    this.setState({ data: fetchtedData });
  };
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <img width="400px" src={require("./assets/image/corona.jpg")} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}
export default App;
