import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

const faceb = require('../assets/F.png');
const insta = require('../assets/I.png');
const homeIco = require('../assets/homeIcon.png');

const I = styled.img `
  height: 2vw;
  width: 2vw;
  float: right;
`

const ContactButton = styled.text `
  font-family: 'Mukta Malar', sans-serif;
  font-size: 1.5vw;
  color: black;
  float: left;
`
const navStyle = {
  paddingTop: '20px',
  marginLeft: '2vw',
  marginRight: '2vw'
}

export default class Navbar extends Component {
  render() {
    return (
      <div className="container" style={navStyle}>
       <div className="row">
       <div className="col s1 l1">
          <Link to="/"><I src={homeIco}></I></Link>
        </div>
        <div className="col s2 l2" style={{paddingLeft: '2vw'}}>
          <Link to="/portfolio"><ContactButton className="shadowed">PORTFOLIO</ContactButton></Link>
        </div>
        <div className="col s2 l2">
          <Link to="/contact"><ContactButton className="shadowed">CONTACT</ContactButton></Link>
        </div>
        <div className="col s5 l5"></div>
        <div className="col s1 l1">
          <a href="https://www.instagram.com/v.sh._stylist"><I src={insta} style={{position: 'absolute', left: '90%'}}></I></a>
        </div><div className="col s1 l1">
          <a href="https://www.facebook.com/vshnyc"><I src={faceb} style={{position: 'absolute', left: '94%'}}></I></a>
        </div>
       </div>
      </div>
    )
  }
}
