import React, {Component, PropTypes} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';
import $ from 'jquery';
import magnificPopup from 'magnific-popup';

const content = require('../assets/portfolio-content.js').default;

const Gallery = styled.div `
  ${'' /*overflow: hidden;*/}
  height: 100%;
  width: 100%;
  ${'' /*display: block;*/}
  margin: 0;
  padding: 0;
  position: relative;`

export default class Portfolio extends Component {

  componentDidMount() {
    var full = false;

    $(document).ready(function () {
      $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        }
      });
    });

    $('.imgWrap').hover(function () {
      // $(this).css('width', '36%');
      $(this).addClass('current');
      //$(this).siblings().css('width', '16%');
      $(this)
        .siblings()
        .addClass('notCurrent');
    }, function () {
      //$('.imgWrap').css('width', '20%');
      $('.imgWrap')
        .siblings()
        .removeClass('notCurrent');
      $('.imgWrap').removeClass('current');
    });

    $('.imgWrap').click(function () {
      if (!full) {
        full = true;
        // $(this).css('width', '100%');
        $(this).addClass('current-full');
        $('#close').addClass('notHidden');
        //$(this).siblings().css('width', '0%');
        $(this)
          .siblings()
          .addClass('notCurrent-full');
      }
    });

    $('.mfp-close').click(function () {
      full = false;
      $('.imgWrap')
        .siblings()
        .removeClass('notCurrent-full');
      $('.imgWrap').removeClass('current-full');
      $('#close').removeClass('notHidden');
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="divider"/>
        <div className='container'>
          <div className='row'>
            <div className='col s12 l12 center'>
              <h1 style={{
                fontSize: '3.3vw'
              }}>PORTFOLIO</h1>
            </div>
          </div>
          <Gallery>
            {content.map((elem) => {
              return (
                <div
                  className="imgWrap"
                  style={{
                  backgroundImage: 'url(' + elem.cover + ')'
                }}>
                  <div className="full-content">
                    <div className="images">
                      <ul className="gallery" style={{height: '45vw'}}>
                        {elem
                          .photos
                          .map((photo) => {
                            return (
                              <li>
                                <a href={photo} className="with-caption image-link">
                                  <img src={photo} style={{width: '100%'}}/>
                                </a>
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
            <div id='close' title="Close (Esc)" type="button" className="mfp-close" style={{visibility: 'hidden'}}>×</div>
          </Gallery>

        </div>
      </div>
    )
  }
}
