<template>
  <div class="about">
    <h1>À propos</h1>

    <p>
      Ce générateur est un fork du <a href="https://media.interieur.gouv.fr/deplacement-covid-19/">générateur officiel</a>.
      Sa particularité est de pouvoir enregistrer plusieurs profils dans l'espace de stockage local du navigateur et
      permet de rendre moins laborieux le remplissage des formulaires.
    </p>

    <p>
      Le certificat généré est en tout point identique à l'officiel.
    </p>

    <p>
      Par ailleurs, ce générateur peut être utilisé hors ligne en tant que <a href="https://fr.wikipedia.org/wiki/Progressive_web_app">Progressive Web App</a>.<br />
      Pour cela, il suffit par exemple d'ajouter l'adresse <a href="https://github.com/ilhooq/attestation-covid-19">https://github.com/ilhooq/attestation-covid-19</a>
      dans les favoris de votre navigateur Web sur votre smartphone. Le générateur pourra ensuite être utilisé hors connexion.
    </p>

    <hr />

    <h2 class="h3">Installation en tant que Web app autonome</h2>

    <h3 class="h4">Installation sur Android</h3>

    <ol>
      <li>Sur votre appareil Android, ouvrez Chrome.</li>
      <li>Accédez à <a href="https://ilhooq.github.io/attestation-covid-19/">https://ilhooq.github.io/attestation-covid-19/</a>.</li>
      <li>Appuyez sur <strong>Ajouter à l'écran d'accueil</strong>.</li>
      <li>Suivez les instructions affichées à l'écran.</li>
    </ol>

    <h3 class="h4">Installation sur Ordinateur</h3>

    <ol>
      <li>Sur votre ordinateur, ouvrez Chrome.</li>
      <li>Accédez à <a href="https://ilhooq.github.io/attestation-covid-19/">https://ilhooq.github.io/attestation-covid-19/</a>.</li>
      <li>En haut à droite de la barre d'adresse, cliquez sur Installer (icône +)</li>
      <li>Suivez les instructions à l'écran.</li>
    </ol>

    <hr />

    <h2 class="h3">Code Source</h2>
    <p>
      Le code source de ce générateur est disponible à l'adresse suivante :
      <a href="https://github.com/ilhooq/attestation-covid-19">https://github.com/ilhooq/attestation-covid-19</a>
    </p>

    <h2 class="h3">Crédits</h2>

    <p>
      Le générateur officiel : <a href="https://github.com/LAB-MI/deplacement-covid-19">deplacement-covid-19</a>
    </p>

    <p>
      Les projets open source suivants ont été utilisés pour le développement de ce service :
    </p>

    <ul>
      <li><a href="https://pdf-lib.js.org/">PDF-LIB</a></li>
      <li><a href="https://github.com/soldair/node-qrcode">qrcode</a></li>
      <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
      <li><a href="https://bootstrap-vue.js.org/">Bootstrap-vue</a></li>
      <li><a href="https://fr.vuejs.org/">Vue.js</a></li>
      <li><a href="https://cli.vuejs.org/">Vue-cli</a></li>
    </ul>

    <p class="text-center">
      <router-link class="btn btn-primary" to="/">Retour au générateur</router-link>
    </p>
  </div>
</template>
