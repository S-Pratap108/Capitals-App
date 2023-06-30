import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapital: countryAndCapitalsList[0]}

  onChange = event => {
    const updatedCapital = countryAndCapitalsList.filter(
      country => country.id === event.target.value,
    )
    this.setState({selectedCapital: updatedCapital[0]})
  }

  render() {
    const {selectedCapital} = this.state
    const {country} = selectedCapital

    return (
      <div className="main-bg">
        <div className="card">
          <h1 className="hdg"> Countries and Capitals </h1>
          <select name="capitals" id="capitals" onChange={this.onChange}>
            {countryAndCapitalsList.map(each => (
              <option value={each.id} key = {each.id}> {each.capitalDisplayText} </option>
            ))}
          </select>
          <label className="label" htmlFor="capitals">
            {' '}
            is capital of which country?{' '}
          </label>
          <p className="country"> {country} </p>
        </div>
      </div>
    )
  }
}

export default Capitals
