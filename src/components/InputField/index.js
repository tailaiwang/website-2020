import React, { Component } from "react";
import { Form } from "react-bootstrap";

import styles from "./styles.module.css";

export default class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRequired: this.props.isRequired,
      name: this.props.name,
      type: this.props.type,
      placeholder: this.props.placeholder,
      value: this.props.value,
      handleChange: this.props.handleChange,

      error: false,
    };
  }

  render() {
    let control;

    if (this.state.isRequired) {
      control = (
        <Form.Control
          required
          name={this.state.name}
          type={this.state.type}
          placeholder={this.state.placeholder}
          onChange={this.state.handleChange}
          value={this.state.value}
          className={styles.formControl}
        />
      );
    } else {
      control = (
        <Form.Control
          name={this.state.name}
          type={this.state.type}
          placeholder={this.state.placeholder}
          onChange={this.state.handleChange}
          value={this.state.value}
          className={styles.formControl}
        />
      );
    }

    return (
      <Form className="inputForm" style={{ width: "100%" }}>
        <Form.Group>{control}</Form.Group>
      </Form>
    );
  }
}
