/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://moleraj-beograd.vercel.app/',
  generateRobotsTxt: true,
  dynamicPaths: [
    '/galerija',
    '/recenzije',
    '/review_form',
    '/sign-in',
  ],
};