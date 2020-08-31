const config = {
  siteTitle: 'SajberRoyale',
  siteTitleShort: 'Blogg för SajberRoyale',
  siteTitleAlt: 'Blogg för SajberRoyale',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://sajber.me/gymnasiearbete',
  pathPrefix: '',
  siteDescription:
    'Blogg för SajberRoyale. Gymnasiearbete för Alexander P, Alfred, Oscar, Melwin, Fabian L och Samuel.',
  siteRss: 'rss.xml',
  siteFBAppID: '1825356251115265',
  googleAnalyticsID: 'UA-161211056-1',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'DD/MM/YYYY',
  userName: 'LiterallyInc',
  userEmail: 'lindgrenfabian@gmail.com', // Email used for RSS feed's author segment
  userTwitter: '',
  userGitHub: 'LiterallyFabian',
  userLocation: '@ SajberGymnasiet',
  userAvatar: 'https://i.imgur.com/jez2avk.png', // User avatar to display in the author segment.
  userDescription:
    "LiterallyInc. is a cool corporation containing Alexander P, Alfred, Oscar, Melwin, Fabian L och Samuel.", // User description to display in the author segment.
  copyright: 'Copyright © 2020. All rights reserved.',
  themeColor: '#c6289f', // Used for setting manifest and progress theme colors.
  backgroundColor: 'purple' // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)
module.exports = config
