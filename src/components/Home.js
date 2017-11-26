import React, {Component, PropTypes} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Img = styled.img `
  width:100%;
`
const Title = styled.text `
  font-size: 3.3vw;
  font-family: 'Playfair Display', serif;
`
const Subtitle = styled.text `
  font-size: 2vw;
  font-family: 'Dancing Script', cursive;
`

export default class Home extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div className="divider"/>
        <div className='container'>
          <div className='row'>
            <div className='col s8 m8 l8'>
              <Img id='homePhoto' src={require('../assets/homePhoto1.jpg')} alt='home-photo'/>
            </div>
            <div className='col s4 m4 l4'>
              <div className='row'>
                <div className='col s12 m12 l12 center' style={{height: '16vw'}}>
                </div>
              </div>
              <div className='row' style={{marginBottom: '0px'}}>
                <div className='col s12 m12 l12 center'>
                  <Title>VIKTORIA SH</Title>
                </div>
              </div>
              <div className='row' style={{marginBottom: '0px'}}>
                <div className='col s12 m12 l12 center'>
                  <Subtitle>fashion stylist</Subtitle>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<Footer/>*/}
      </div>
    )
  }
}
