<template>
  <div id="app">
    <header role="banner" class="bg-primary">
      <div class="container">
        <b-navbar toggleable="lg" type="dark" variant="primary">
          <b-navbar-brand class="covid-title" to="/">
            COVID-19
          </b-navbar-brand>
          <span class="covid-subtitle">
            Générateur d'attestation de déplacement dérogatoire
          </span>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/confidentialite">Confidentialité</b-nav-item>
              <b-nav-item to="/about">À propos</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <div class="container my-4">
      <router-view/>
    </div>
    <footer role="contentinfo" class="p-5 bg-dark text-light">
        <div class="text-center">
          <a href="https://www.gouvernement.fr/info-coronavirus"
             title="Information du gouvernement sur le Covid-19 - nouvelle page"
             target="_blank"
             class="text-light">Informations du gouvernement sur le Covid-19</a>
          <p class="" >Plus d’infos au <a class="text-light" href="tel:0800130000">0 800 130 000</a></p>
          <p class="footer-line" id="version"></p>
        </div>
    </footer>

    <div class="alert  alert-info  d-none" id="update-alert">
        Une nouvelle version est disponible. Cliquer sur le bouton pour l'obtenir.
        <p class="text-right">
            <button id="reload-btn" class="btn  btn-info">Mettre à jour</button>
        </p>
    </div>
  </div>
</template>
