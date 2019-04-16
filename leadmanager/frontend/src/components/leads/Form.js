import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="row">
        <div className="col-sm-5">
          <div className="card card-body mt-4 mb-4">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email Address"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
              <div class="form-group">
                <label for="textarea">Message</label>
                <textarea
                  class="form-control"
                  id="textarea"
                  rows="3"
                  name="message"
                  onChange={this.onChange}
                  value={message}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addLead }
)(Form);
