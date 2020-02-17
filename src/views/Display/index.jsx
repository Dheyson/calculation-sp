import React from 'react';

// import { Container } from './styles';
import './styles.css';

export default function Display(props) {
  return (
  <div className="display">{props.value}</div>
  );
}
