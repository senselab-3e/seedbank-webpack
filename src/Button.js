import React, { Component } from 'react';
import './style/button.css'; // Tell Webpack that Button.js uses these styles
class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}