import React, { useState } from 'react'
import Deck from '../components/Deck'
import styles from './styles.module.css'

export default function App(props) {
  return (
    <div className={styles.container}>
      <Deck cats={props.cats}/>
    </div>
  )
}
