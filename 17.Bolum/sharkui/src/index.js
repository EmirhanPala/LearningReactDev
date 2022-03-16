import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

//Propları kullanmak-1: Örnek
/*export const Button = ({text, onClick}) => {
  return <button onClick={onClick}>{text}</button>
};*/

//Propları kullanmak-2: Örnek
export const Button = (props) => {
  return <button {...props}>{props.text}</button>
};