import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import FavCards from './FavCards'

class MyFavorites extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      pLanguages: [],
    }
  }


  componentDidMount = async () => {

    let pLanguages = await axios.get(`${process.env.REACT_APP_SERVER}/getFavLang?email=${this.props.auth0.user.email}`);


    await this.setState({
      pLanguages: pLanguages.data.favLang,
    })
    console.log(this.state.pLanguages);
  }

  deletefromfav = async (idx) => {

    let Info = {
      email: this.props.auth0.user.email,
      idx: idx,
    }

    let deletedfromfav = await axios.post(`${process.env.REACT_APP_SERVER}/deletefromfav`, Info);
    console.log(deletedfromfav);
    this.componentDidMount();

  }


  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>

        { this.state.pLanguages.map((element, idx) => {
          return (<FavCards pLanguagesInfo={this.state.pLanguages[idx]} deletefromfav={this.deletefromfav} idx={idx}/>)
          // pLanguagesInfo is an OBJECT with the info needed for the current card
        })}

      </>
    )
  }
}

export default withAuth0(MyFavorites);

