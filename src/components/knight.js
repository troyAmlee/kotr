import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import './knight.css'
 
export default class Knight extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
  render() {
    return (
        <div className = "knightslanding">
            <iframe src={this.props.source} width="340" height="500" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
    );
  }
}