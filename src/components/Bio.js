import React from 'react'
import { Follow } from 'react-twitter-widgets'
import styles from './Bio.module.scss'

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={config.userAvatar}
      alt={config.userName}
    />
    <p>
      Publicerat av <strong>{config.userName}</strong>, ett coolt företag som består av Alexander P, Alfred, Fabian L, Melwin, Oscar & Samuel.
      {` `}
    </p>
  </>
)

export default Bio
