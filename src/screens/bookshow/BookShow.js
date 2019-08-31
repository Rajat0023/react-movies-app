import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Details from '../../screens/details/Details';
import Typography from '@material-ui/core/Typography';
import './BookShow.css';
import Home from '../home/Home';

class BookShow extends Component {


    backtoMovieDetailsHandler = (e) =>{
        ReactDOM.render(<Home />, document.getElementById("root"));
    }

    render() {
        return (
            <div>
                <Header />
             <div className="bookShow">
             <Typography onClick={this.backtoMovieDetailsHandler}>
                 &#60; Back to Movie Details
             </Typography>
         </div>
         </div>
        )
    }
}

export default BookShow;