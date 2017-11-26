import React, {Component, PropTypes} from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const cont = require('../assets/contact.jpg');
const send = require('../assets/send.png');

const TextArea = styled.textarea `
  white-space: normal;
  text-align: justify;
  -moz-text-align-last: center; /* Firefox 12+ */
  text-align-last: center;
  border: 2px solid rgba(0, 0, 0, 0.65);
`
const Send = styled.img `
  height: 3vw;
  width: 3vw;
`

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: {
        to: 'denisandreev64@gmail.com',
        from: 'test@example.com',
        subject: 'test',
        text: 'test message',
        html: 'none'
      }
    }
  }

  componentDidMount() {}

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
              }}>CONTACT ME</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col s6 l6 center'>
              <img
                style={{
                width: '100%'
              }}
                src='https://pp.userapi.com/c840626/v840626218/260fc/SuY-kSDuKEw.jpg'/>
            </div>
            <div className='col s6 l6 center'>
              <div className="row">
                <div className="input-field col s12">
                 <p>For promotional and business collaborations, or for any pesonal questions, you can drop me a line: </p>
                </div>
              </div>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <TextArea id="fullName" placeholder="Full name" required></TextArea>
                      <label htmlFor="fullName"></label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <TextArea id="email" placeholder="Email" required></TextArea>
                      <label htmlFor="email"></label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <TextArea id="phone" placeholder="Phone #"></TextArea>
                      <label htmlFor="phone"></label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <TextArea
                        id="message"
                        style={{
                        height: '8vw'
                      }}
                        placeholder="Your message"
                        required></TextArea>
                      <label htmlFor="message"></label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <Send
                        src={send}
                        onClick={() => {
                        console.log('your message has been sent');
                        sgMail.send(this.state.msg)
                      }}/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
