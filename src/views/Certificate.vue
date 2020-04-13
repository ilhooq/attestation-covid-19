<template>
  <div class="certificate">

    <main role="main">
    <p class="alert  alert-danger  d-none" role="alert" id="alert-facebook"></p>

    <div class="container">
      <h2 class="titre-2">Remplissez hors ligne vos attestations numériques :</h2>
      <!--<b-button v-b-modal="'modalFormProfile'" variant="primary">Créer profil</b-button>-->
      <FormProfile />
    </div>
    <div class="">
        <p class="github">
            Le code source de ce service est consultable sur <a href="https://github.com/LAB-MI/deplacement-covid-19" class="github-link">Github</a>.
        </p>
        <p class="label-mi">
            Ministère de l'Intérieur - DNUM - SDIT
        </p>
        <img class="center" src="../assets/logo_dnum.svg" alt="logo dnum">
    </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import FormProfile from '@/components/FormProfile.vue'

export default {
  name: 'Certificate',
  components: {
    FormProfile
  }
}
</script>
