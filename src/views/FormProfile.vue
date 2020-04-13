
<template>
  <form id="form-profile" @submit.stop.prevent="save" accept-charset="utf-8">

    <b-form-select v-model="profile" :options="profileOptions" @change="loadProfile"></b-form-select>
    <hr />

    <h2 class="h3 my-3">Remplissez votre attestation numérique :</h2>

    <div class="form-row">
      <b-form-group label="Prénom" label-for="field-firstname" class="col-md-6">
        <b-form-input
          id="field-firstname"
          v-model="form.firstname"
          required
          placeholder="Jean"
          autofocus
          aria-invalid="true"
        />
        <span class="validity" aria-hidden="true"></span>
        <p class="exemple"></p>
      </b-form-group>

      <b-form-group label="Nom" label-for="field-lastname" class="col-md-6">
        <b-form-input
          id="field-lastname"
          v-model="form.lastname"
          required
          placeholder="Dupont"
          autofocus
          aria-invalid="true"
        />
        <span class="validity" aria-hidden="true"></span>
        <p class="exemple"></p>
      </b-form-group>
    </div>

    <div class="form-row">
      <b-form-group label="Date de naissance (au format jj/mm/aaaa)" label-for="field-birthday" class="col-md-6">
        <b-form-input
          id="field-birthday"
          v-model="form.birthday"
          pattern="^([0][1-9]|[1-2][0-9]|30|31)\/([0][1-9]|10|11|12)\/(19[0-9][0-9]|20[0-1][0-9]|2020)"
          inputmode="numeric"
          aria-invalid="true"
          placeholder="01/01/1970"
          maxlength="10"
          required
        />
        <span class="validity" aria-hidden="true"></span>
        <p class="exemple"></p>
      </b-form-group>

      <b-form-group label="Lieu de naissance" label-for="field-birthplace" class="col-md-6">
        <b-form-input
          id="field-birthplace"
          v-model="form.birthplace"
          aria-invalid="true"
          placeholder="Lyon"
          required
        />
        <span class="validity" aria-hidden="true"></span>
        <p class="exemple"></p>
      </b-form-group>
    </div>

    <b-form-group label="Adresse" label-for="field-address">
      <b-form-input
        id="field-address"
        v-model="form.address"
        aria-invalid="true"
        placeholder="999 avenue de france"
        required
      />
      <span class="validity" aria-hidden="true"></span>
      <p class="exemple"></p>
    </b-form-group>

    <div class="form-row">
      <b-form-group label="Code Postal" label-for="field-zipcode" class="col-md-6">
        <b-form-input
          id="field-zipcode"
          v-model="form.zipcode"
          inputmode="numeric"
          pattern="[0-9]{5}"
          min="00000"
          max="99999"
          aria-invalid="true"
          minlength="4"
          maxlength="5"
          placeholder="75001"
          required
        />
        <span class="validity" aria-hidden="true"></span>
        <p class="exemple"></p>
      </b-form-group>

      <b-form-group label="Ville" label-for="field-town" class="col-md-6">
        <b-form-input
          id="field-town"
          v-model="form.town"
          aria-invalid="true"
          placeholder="Paris"
          required
        />
        <span class="validity" aria-hidden="true"></span>
        <p class="exemple"></p>
      </b-form-group>
    </div>

    <p class="text-right">
      <b-button type="button" @click="saveProfile" size="sm" variant="info">{{ profile !== null ? 'Modifier le profil' : 'Enregistrer le profil' }}</b-button>
      <b-button type="button" @click="deleteProfile" size="sm" variant="danger" v-if="profile !== null" class="ml-2">Supprimer le profil</b-button>
    </p>

    <b-form-group id="motif" label="Choisissez le ou les motif(s) de sortie">
      <b-form-checkbox-group id="checkbox-group-motif" v-model="certificate.motif" name="field-reason" stacked>
        <b-form-checkbox value="travail">
          Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle, lorsqu'ils sont indispensables à l'exercice
          d’activités ne pouvant être organisées sous forme de télétravail ou déplacements professionnels ne pouvant être différés.
        </b-form-checkbox>
        <b-form-checkbox value="courses">
          Déplacements pour effectuer des achats de fournitures nécessaires à l’activité professionnelle et des achats de première nécessité
          dans des établissements dont les activités demeurent autorisées
          (<a href="https://www.service-public.fr/particuliers/actualites/A13921"
              class="stores-link" title="Liste des commerces et établissements qui restent ouverts - nouvelle page"
              target="_blank">liste des commerces et établissements qui restent ouverts</a>).
        </b-form-checkbox>
        <b-form-checkbox value="sante">
          Consultations et soins ne pouvant être assurés à distance et ne pouvant être différés ; consultations et soins des patients atteints
          d'une affection de longue durée.
        </b-form-checkbox>
        <b-form-checkbox value="famille">
          Déplacements pour motif familial impérieux, pour l’assistance aux personnes vulnérables ou la garde d’enfants.
        </b-form-checkbox>
        <b-form-checkbox value="sport">
          Déplacements brefs, dans la limite d'une heure quotidienne et dans un rayon maximal d'un kilomètre autour du domicile,
          liés soit à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective et de toute proximité
          avec d'autres personnes, soit à la promenade avec les seules personnes regroupées dans un même domicile,
          soit aux besoins des animaux de compagnie.
        </b-form-checkbox>
        <b-form-checkbox value="judiciaire">Convocation judiciaire ou administrative.</b-form-checkbox>
        <b-form-checkbox value="missions">
          Participation à des missions d’intérêt général sur demande de l’autorité administrative.
        </b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Date de sortie">
      <b-form-input type="date" id="field-datesortie" v-model="certificate.datesortie" name="datesortie" autocomplete="off" placeholder="JJ/MM/YYYY" aria-invalid="true" required />
    </b-form-group>
    <b-form-group label="Heure de sortie">
      <b-form-input type="time" id="field-heuresortie" v-model="certificate.heuresortie" name="heure" autocomplete="off" aria-invalid="true" required />
    </b-form-group>

    <p class="text-center my-3">
      <b-button type="button" @click="getCertificate" size="lg" variant="primary">Générer mon attestation</b-button>
    </p>

  </form>
</template>

<script>

import generatePdf from '../certificate'

function pad (str) {
  return String(str).padStart(2, '0')
}

export default {
  name: 'FormProfile',
  data () {
    return {
      form: {
        firstname: '',
        lastname: '',
        birthday: '',
        birthplace: '',
        address: '',
        zipcode: '',
        town: '',
      },
      certificate: {
        motif: [],
        datesortie: '',
        heuresortie: '',
      },
      profile: null,
      profiles: [],
      profileOptions: []
    }
  },
  beforeMount: function()
  {
    this.updateProfiles()
  },
  created: function()
  {
    const loadedDate = new Date()
    const year = loadedDate.getFullYear()
    const month = pad(loadedDate.getMonth() + 1) // Les mois commencent à 0
    const day = pad(loadedDate.getDate())
    const hour = pad(loadedDate.getHours())
    const minute = pad(loadedDate.getMinutes())

    this.certificate.datesortie = `${year}-${month}-${day}`
    this.certificate.heuresortie = `${hour}:${minute}`
  },
  methods: {
    clear: function() {
      for (const field in this.form) {
        this.form[field] = ''
      }
    },

    updateProfiles: function() {
      this.profiles = localStorage.getItem('profils') ? JSON.parse(localStorage.getItem('profils')) : []
      this.profileOptions = [
        {value: null, text: 'Charger un profil'}
      ]
      this.profiles.forEach((item, i) => {
        this.profileOptions.push({value: i, text: item.firstname})
      });
    },

    saveProfile: function() {

      let profiles = this.profiles
      if (this.profile === null) {
        profiles.push(this.form)
        this.profile++
      } else {
        profiles[this.profile] = this.form
      }

      localStorage.setItem('profils', JSON.stringify(profiles))

      this.updateProfiles()
    },

    loadProfile: function() {
      if (this.profile === null) {
        this.clear()
        return
      }

      for (const field in this.form) {
        this.form[field] = this.profiles[this.profile][field]
      }
    },

    deleteProfile: function() {
      if (this.profile !== null) {
        let profiles = this.profiles.filter((value, index) => {
          return this.profile != index
        })

        localStorage.setItem('profils', JSON.stringify(profiles))

        this.updateProfiles()
        this.profile = null
        this.clear()
      }
    },
    getCertificate: function()
    {
      const profile = {
        lastname: this.form.lastname,
        firstname: this.form.firstname,
        birthday: this.form.birthday,
        lieunaissance: this.form.birthplace,
        address: this.form.address,
        zipcode: this.form.zipcode,
        town: this.form.town,
        datesortie: this.certificate.datesortie,
        heuresortie: this.certificate.heuresortie
      }
      generatePdf(profile, this.certificate.motif.join('-')).then(blob => {

        const creationDate = new Date().toLocaleDateString('fr-CA')
        const creationHour = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', '-')
        const fileName = `attestation-${creationDate}_${creationHour}.pdf`
        const link = document.createElement('a')
        var url = URL.createObjectURL(blob)
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
      })
    }
  },

}
</script>

<style lang="scss">
@media (min-width: 960px){
  #form-profile {
    max-width: 690px;
    margin: auto;
  }
}

#motif {
  legend {
    font-size: 1.5rem;
  }
  .custom-control {
    margin-bottom: 1rem;
  }
}

#checkbox-group-motif {
  outline: none;
}
</style>
