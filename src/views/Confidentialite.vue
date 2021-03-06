<template>
  <div class="confidentialite">
    <div class="wrapper">
      <p class="text-alert">
          Les données saisies sont stockées exclusivement sur votre téléphone ou votre ordinateur. Aucune information n'est collectée par un service externe.
          L'attestation pdf générée contient un QR Code. Ce code-barres graphique permet de lire les informations portées dans votre attestation au moment de leur saisie.
          Il peut être déchiffré à l'aide de tout type de lecteur de QR code générique.
      </p>
      <h2 class="titre-2">Politique de confidentialité</h2>
      <h3 class="titre-3">Collecte des données personnelles</h3>
      <p>
          Les informations saisies dans ce générateur d’attestation de
          déplacement ne font l’objet d’aucune collecte par un service externe. Ces données personnelles<sup>1</sup> sont
          exclusivement stockées dans le terminal (ordinateur, tablette,
          smartphone) utilisé pour générer l’attestation. Le code source
          de ce gérérateur d'attestation est ouvert. Il peut être consulté
          sur <a href="https://github.com/ilhooq/attestation-covid-19">
              https://github.com/ilhooq/attestation-covid-19</a>.
      </p>
      <em>1 - Prénom, Nom, Date de naissance, Lieu de naissance, Adresse,
          Code postal, Ville.</em>
      <h3 class="titre-3">Traceurs et cookies</h3>
      <p>
          Lors de la consultation du générateur, des cookies sont déposés
          sur le terminal utilisé. Ces cookies sont utilisés pour
          sécuriser le service proposé.
      </p>

      <h4 class="titre-4">Définition d’un cookie</h4>
      <p>
          Un "cookie" est une suite d'informations, généralement de petite
          taille et identifié par un nom, qui peut être transmis à votre
          navigateur par un site web sur lequel vous vous connectez. Votre
          navigateur web le conserve pendant une certaine durée, et le
          renvoie au serveur web chaque fois que vous vous y
          re-connecterez. Les cookies ont de multiples usages : ils
          peuvent servir à mémoriser votre identifiant client auprès d'un
          site marchand, le contenu courant de votre panier d'achat, un
          identifiant permettant de tracer votre navigation pour des
          finalités statistiques ou publicitaires, etc.
      </p>
      <h4 class="titre-4">Cookies utilisés</h4>
      <p>
          Différents cookies techniques sont utilisés sur ce générateur
          d’attestation de déplacement :
      </p>
      <table class="table">
          <thead>
              <tr class="header-row">
                  <th>Nom du Cookie</th>
                  <th>Finalité</th>
                  <th>Durée de conservation</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td data-label="Nom du Cookie" class="name-col">incap_ses_*</td>
                  <td data-label="Finalité" >
                      Protection DDoS Incapsula et Pare-feu pour application
                      web : cookie servant à relier les requêtes HTTP à une
                      session. La réouverture du navigateur et l’accès au même
                      site sont considérés comme des visites différentes. Pour
                      maintenir les sessions existantes (cookie de session).
                  </td>
                  <td data-label="Durée de conservation" >Supprimé après la fermeture du navigateur.</td>
              </tr>
              <tr>
                  <td data-label="Nom du Cookie" class="name-col">nlbi_*</td>
                  <td data-label="Finalité" >
                      Protection DDoS Incapsula et Pare-feu pour application
                      web : cookie équilibreur de charge qui garantit que les
                      requêtes d’un client sont envoyées au même serveur
                      d’origine.
                  </td>
                  <td data-label="Durée de conservation" >Supprimé après la fermeture du navigateur.</td>
              </tr>
              <tr>
                  <td data-label="Nom du Cookie" class="name-col">visid_incap_*</td>
                  <td data-label="Finalité" >
                      Protection DDoS Incapsula et Pare-feu pour application
                      web : cookie servant à relier certaines sessions à un
                      visiteur spécifique (visiteur représentant un ordinateur
                      spécifique). Afin d’identifier les clients ayant déjà
                      consulté Incapsula. Le seul cookie qui perdure pour une
                      durée de 12 mois.
                  </td>
                  <td data-label="Durée de conservation" >12 mois.</td>
              </tr>
              <tr>
                  <td data-label="Nom du Cookie" class="name-col">__utm*</td>
                  <td data-label="Finalité" >
                      Cookie de classification Incapsula : pour voir comment
                      le client réagit à et gère un cookie mal formé afin
                      d’identifier la nature de ce client.
                  </td>
                  <td data-label="Durée de conservation" >900 secondes maximum.</td>
              </tr>
          </tbody>
      </table>

      <p>
          Vous pouvez refuser ces cookies en configurant les paramètres de
          votre navigateur.
      </p>
      <h4 class="titre-4">
          Moyens d'opposition au dépôt des cookies via votre navigateur
      </h4>
      <p>
          <strong>Si vous utilisez Firefox : </strong>Cliquez sur le
          bouton de menu et sélectionnez « Options ». Ensuite,
          sélectionnez le panneau « Vie privée et sécurité ». Rendez-vous
          à la section « Protection renforcée contre le pistage ».
          Choisissez la protection personnalisé [bouton radio
          « Personnalisé »]. Décochez la case « cookies ». Cliquez sur le
          bouton « Actualisez tous les onglets » si vous souhaitez
          appliquer ces changements à la navigation en cours au sein de
          votre navigateur.
      </p>
      <p>
          <strong>Si vous utilisez Chrome : </strong>En haut à droite,
          cliquez sur « Plus > Paramètres ». En bas, cliquez sur «
          Paramètres avancés ». Dans la section "Confidentialité et
          sécurité", cliquez sur « Paramètres des sites». Cliquez sur «
          Cookies et données des sites». Désactivez l’option « Autoriser
          les sites à enregistrer/lire les données des cookies ».
      </p>
      <p>
          <strong>Si vous utilisez Internet Explorer : </strong>Sélectionnez le bouton « Outils », puis « Options
          Internet ».
          Sélectionnez l’onglet « Confidentialité » puis sous « Paramètres
          », sélectionnez « Avancé ». Cochez la case "Ignorer la gestion
          automatique des cookies", puis sélectionner "Refuser" dans la
          colonne "Cookies tierces parties".
      </p>
      <p>
          Pour plus d’informations sur le sujet, n’hésitez pas à visiter
          le
          <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs">site de la CNIL</a>.
      </p>
    </div>
    <p class="text-center">
      <router-link class="btn btn-primary" to="/">Retour au générateur</router-link>
    </p>
  </div>
</template>
