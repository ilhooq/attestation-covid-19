
module.exports = {
  chainWebpack: config => {
   config
   .plugin('html')
   .tap(args => {
     args[0].title = 'COVID-19 – Générateur d\'attestation de déplacement dérogatoire'
     return args
   })
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/attestation-covid-19/' : '/',
  pwa: {
    name: 'Générateur d\'attestation de déplacement dérogatoire',
    themeColor: '#ced4da',
    msTileColor: '#000000',
    manifestOptions: {
      short_name: 'Déplacement covid-19',
      description: 'Application alternative pour la génération d\'attestation de déplacement dérogatoire dématérialisée.',
      categories: ['government', 'health'],
      lang: 'fr-FR',
      orientation: 'portrait-primary',
      background_color: '#000191',
      display: 'minimal-ui'
    }
  }
}
