import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cards from './Cards';


class AllDataAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pLanguages: [],
        }
    }


    componentDidMount = async () => {

        let pLanguages = await axios.get(`${process.env.REACT_APP_SERVER}/findLanguages`);
        console.log(pLanguages);

        await this.setState({
            pLanguages: pLanguages.data,
        })
        // console.log(this.props.auth0.user.email);
    }


    addToFav = async(pLInfo) =>{

        let Info = {
            email: this.props.auth0.user.email,
            id : pLInfo.id,
            title: pLInfo.title,
            dateCreated: pLInfo.dateCreated,
            description: pLInfo.description,
            imageUrl: pLInfo.imageUrl,
        }
        
        let addedtofav = await axios.post(`${process.env.REACT_APP_SERVER}/addtofav`, Info);
        console.log(addedtofav);
    }

    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>

                {this.state.pLanguages.map((element, idx) => {
                    return (<Cards pLanguagesInfo={this.state.pLanguages[idx]} addToFav={this.addToFav}/>)
                    // pLanguagesInfo is an OBJECT with the info needed for the current card
                })}


            </div>

        )
    }
}

export default withAuth0(AllDataAPI);


