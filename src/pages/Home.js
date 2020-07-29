import React, { Component } from 'react';

import email from '../images/388-mail.svg';
import users from '../images/115-users.svg';
import image from '../images/kisspng.png';
export default class Home extends Component {
  render() {
    return (
      <main className="row">
        <section className="col">
          <div className="card-body">
          <h1 className="card-title"><span>All-in-one</span> tool for cross-platform delivery analytics</h1>
          <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores harum modi pariatur corrupti quia, quae eum cupiditate impedit aut illo cum consequuntur architecto quod aspernatur? Tempore necessitatibus excepturi doloremque molestiae.</p>
          <button type="button" className="btn btn-light">Get Started</button>
          </div>
          <div className="container row">
            <div className="col">
              <img src={email} alt="Email"/>
              <h3>Email Marketing</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col">
              <img src={users} alt="Team"/>
              <div>
                <h3>Team Accounts</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="col">
          <div className="container">
            <img className="img-fluid rounded" src={image} alt="Imageprimary" />
          </div>
        </section>
      </main>
    );
  }
}