import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon
} from 'react-share'
import urljoin from 'url-join'
import config from '../../data/SiteConfig'
import styles from './SocialLinks.module.scss'

const SocialLinks = ({ postNode, postPath, mobile }) => {
  const post = postNode.frontmatter
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath)
  const iconSize = mobile ? 32 : 32
  const filter = count => (count > 0 ? count : '')
  const renderShareCount = count => (
    <div className={styles.shareCount}>{filter(count)}</div>
  )

  return (
    <div>
    </div>
  )
}

export default SocialLinks
