import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row footer_style center">
          <div className="col-sm-4">
            <p>
              We are an award-winning creative agency, dedicated to the best
              result in web design, promotion, business consulting, and
              marketing.
            </p>

            <p className="rights">
              <span>©  </span>
              <span className="copyright-year">2018</span>
              <span> </span>
              <span>Waves</span>
              <span>. </span>
              <span>All Rights Reserved.</span>
            </p>
          </div>
          <div classNameName="col-sm-4">
            <h5>Contacts</h5>
            <dl className="contact-list">
              <dt>Address:</dt>
              <dd>798 South Park Avenue, Jaipur, Raj</dd>
            </dl>
            <dl className="contact-list">
              <dt>email:</dt>
              <dd>
                <a href="mailto:#">dkstudioin@gmail.com</a>
              </dd>
            </dl>
            <dl className="contact-list">
              <dt>phones:</dt>
              <dd>
                <a href="tel:#">+91 7568543012</a> <span>or</span>{" "}
                <a href="tel:#">+91 9571195353</a>
              </dd>
            </dl>
          </div>
          <div className="col-sm-4">
            {" "}
            <h5>Links</h5>
            <ul class="nav-list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
