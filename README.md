# Générateur de certificat de déplacement

Ce générateur est un fork du [générateur officiel](https://github.com/LAB-MI/deplacement-covid-19). Sa particularité est de pouvoir enregistrer plusieurs profils dans le localStorage du navigateur et permet de rendre moins laborieux le remplissage des formulaires.

Le certificat généré est en tout point identique à l'officiel.

Par ailleurs, ce générateur peut être utilisé hors ligne en tant que [Progressive Web App](https://fr.wikipedia.org/wiki/Progressive_web_app).

----------

## Développer

### Installer le projet

```console
$ git clone https://github.com/ilhooq/attestation-covid-19.git
$ cd attestation-covid-19
$ npm install
$ npm run serve
```

### Générer le code de production

```console
$ npm run build
```

Le code à déployer sera dans le dossier `dist`

## Crédits

Le générateur officiel : [deplacement-covid-19](https://github.com/LAB-MI/deplacement-covid-19)

Les projets open source suivants ont été utilisés pour le développement de ce
service :

- [PDF-LIB](https://pdf-lib.js.org/)
- [qrcode](https://github.com/soldair/node-qrcode)
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap-vue](https://bootstrap-vue.js.org/)
- [Vue.js](https://fr.vuejs.org/)
- [Vue-cli](https://cli.vuejs.org/)
