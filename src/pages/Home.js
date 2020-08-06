import React, { Component } from 'react';

import './styles/Home.css';
import email from '../images/388-mail.svg';
import team from '../images/115-users.svg';
import image from '../images/kisspng.png';
export default class Home extends Component {
  render() {
    return (
      <main className="main__container row container-fluid">
        <section className="col">
          <div className="card-body">
          <h1 className="card-title"><span>All-in-one</span> tool <br />for cross-platform <br />delivery analytics</h1>
          <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores harum modi pariatur corrupti quia, quae eum cupiditate impedit aut illo cum consequuntur architecto quod aspernatur? Tempore necessitatibus excepturi doloremque molestiae.</p>
          <button type="button" className="btn btn-light">Get Started</button>
          </div>
          <div className="container__contacts container row">
            <div className="container__email col">
              <div>
                <img src={email} alt="Email"/>
              </div>
              <div>
              <h5>Email Marketing</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="container__team col">
              <div>
                <img src={team} alt="Team"/>
              </div>
              <div>
                <h5>Team Accounts</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section__container col">
          <div className="section__container--image container">
            <img className="img-fluid mx-auto d-block" src={image} alt="Imageprimary" />
          </div>
        </section>
      </main>
    );
  }
}