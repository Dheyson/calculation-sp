import React from 'react';
// import { Container } from './styles';
import './styles.css';

export default function Button(props) {
  return (
    <>
    <button
    onClick={(e) => props.click && props.click(props.txt)}
    className={`
      button
      ${props.operation ? 'operation' : ''}
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
    `}>
      {props.txt}
    </button>
    </>
  );
}
