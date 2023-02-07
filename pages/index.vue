<template>
  <div class="my-4">
    <v-container class="py-md-16">
      <h1 class="text-h1 mb-4 text-center primary--text">
        Niemand muss häusliche Gewalt aushalten.
      </h1>
      <h2 class="text-center secondary--text subtitle-1 mb-8">Auch du nicht</h2>
      <p class="text-center mx-auto" style="max-width: 530px">
        Wir wollen <b>Frauen und ihren Kindern aus Gewaltbeziehungen helfen</b>.
        Wir werden in naher Zukunft Hilfe in Form einer
        <b>persönlichen Online-Beratung</b> und einer
        <b>sicheren Zuflucht</b> anbieten.
      </p>
    </v-container>
    <v-img src="paige-cody-bOVZ_f3fbQM-unsplash.jpg" max-height="300px"></v-img>
    <v-sheet color="grey lighten-5" class="pb-8"
      ><v-container>
        <h3 class="text-h2 mb-4 pt-8 text-center secondary--text">
          Warum dieses Projekt für uns eine Herzensangelegenheit geworden ist?
        </h3>
        <p class="text-center font-weight-bold">
          Wir haben das mal zusammengefasst.
        </p>

        <v-carousel :continuous="false" :height="height + 40" class="mb-8">
          <v-carousel-item v-for="i in 10" :key="i"
            ><v-img :height="height" :src="'pitch/' + i + '.jpg'" contain
          /></v-carousel-item>
        </v-carousel>
        <h3
          class="
            text-h3 text-uppercase
            mb-4
            pt-8
            text-center
            font-weight-bold
            secondary--text
          "
        >
          Unsere Angebote demnächst
        </h3>
        <Offerings :disabled="true" />
      </v-container>
    </v-sheet>
    <!-- <v-container>
      <h3
        class="
          text-h3 text-uppercase
          mb-4
          mt-8
          text-center
          font-weight-bold
          secondary--text
        "
      >
        Sichere Zuflucht Magazin
      </h3>
      <p class="text-center">
        Hier findet ihr Erzählungen von Frauen, die es geschafft haben, sich aus
        ihrer gewaltvollen Beziehung zu befreien und nun anderen helfen möchten.
        Und noch vieles mehr...
      </p>
    </v-container>
    <v-slide-group
      show-arrows
      class="pa-1 mb-16 mx-auto"
      style="max-width: 650px"
    >
      <v-slide-item v-for="n in 3" :key="n">
        <v-hover v-slot="{ hover }">
          <v-card class="ma-1" width="200">
            <v-img src="paige-cody-bOVZ_f3fbQM-unsplash.jpg" max-height="300px"
              ><v-expand-transition>
                <div
                  v-if="hover"
                  class="
                    d-flex
                    transition-fast-in-fast-out
                    secondary
                    v-card--reveal
                    font-weight-bold
                    d-flex
                    align-center
                    justify-center
                    text-center
                    white--text
                  "
                  style="height: 100%"
                >
                  Bald können wir das anbieten.
                </div>
              </v-expand-transition></v-img
            >
            <v-card-text>
              <v-skeleton-loader
                :boilerplate="true"
                class="mx-auto"
                max-width="300"
                type="paragraph"
              ></v-skeleton-loader>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-slide-item>
    </v-slide-group> -->
    <v-divider />
    <v-container>
      <v-row style="max-width: 1000px" class="mx-auto pt-8">
        <v-col cols="12" md="4">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" max-width="320">
              <v-img
                src="medium-shot-woman-with-laptop-writing.jpg"
                height="200px"
                ><v-expand-transition>
                  <div
                    v-if="hover"
                    class="
                      d-flex
                      transition-fast-in-fast-out
                      secondary
                      v-card--reveal
                      font-weight-bold
                      d-flex
                      align-center
                      justify-center
                      text-center
                      white--text
                    "
                    style="height: 100%"
                  >
                    Bald können wir das anbieten.
                  </div>
                </v-expand-transition></v-img
              >

              <v-card-title
                ><h3 class="text-h3 primary--text font-weight-bold mb-2">
                  Sichere Zuflucht Magazin
                </h3>
              </v-card-title>

              <v-card-subtitle>
                Erfahrungsberichte können helfen. Deshalb wollen wir eure
                Geschichten hier zeigen, um anderen Frauen Mut zu machen.
                Schreibt einen Beitrag oder verlinkt euer Beratungsvideo oder
                Podcast-Beitrag zum Thema häusliche Gewalt?
                <b>So könnt ihr einen Teil beitagen.</b>
                <v-btn
                  color="primary my-4"
                  href="mailto:magazin@sichere-zuflucht.de"
                >
                  Magazinbeitrag anbieten
                </v-btn>
              </v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" max-width="320">
              <v-img src="AdobeStock_342417877.jpeg" height="200px"
                ><v-expand-transition>
                  <div
                    v-if="hover"
                    class="
                      d-flex
                      transition-fast-in-fast-out
                      secondary
                      v-card--reveal
                      font-weight-bold
                      d-flex
                      align-center
                      justify-center
                      text-center
                      white--text
                    "
                    style="height: 100%"
                  >
                    Bald können wir das anbieten.
                  </div>
                </v-expand-transition></v-img
              >

              <v-card-title
                ><h3 class="text-h3 primary--text font-weight-bold mb-2">
                  Werden Sie Teil von Sichere Zuflucht
                </h3>
              </v-card-title>

              <v-card-subtitle>
                Wir erweitern permanent unseren Pool an Berater*innen und freuen
                uns über alle, die
                <b>Frauen und ihre Kinder aktiv unterstützten</b> wollen.
                <br /><br />Im Besonderen suchen wir nach
                <b
                  >engagierten Psycholog*innen, Psychotherapeut*innen,
                  Coach*innen, Ärzt*innen, Anwält*innen</b
                >
                zu Ehe-Themen, <b>Sozialarbeiter*innen</b>.<br /><br />
                Sie sind <b>selbstständig</b> tätig und wollen uns unterstützen?
                Wir freuen uns auf Ihre Nachricht.
                <v-btn
                  color="primary my-4"
                  href="mailto:beratung@sichere-zuflucht.de"
                >
                  Anmeldung für Berater*innen
                </v-btn>
              </v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" max-width="320">
              <v-img
                src="gleren-meneghin-VSLPOL9PwB8-unsplash.jpg"
                height="200px"
                ><v-expand-transition>
                  <div
                    v-if="hover"
                    class="
                      d-flex
                      transition-fast-in-fast-out
                      secondary
                      v-card--reveal
                      font-weight-bold
                      d-flex
                      align-center
                      justify-center
                      text-center
                      white--text
                    "
                    style="height: 100%"
                  >
                    Bald können wir das anbieten.
                  </div>
                </v-expand-transition></v-img
              >

              <v-card-title
                ><h3 class="text-h3 primary--text font-weight-bold mb-2">
                  Liebe Unterkunfsbesitzer*innen, helfen Sie mit!
                </h3>
              </v-card-title>

              <v-card-subtitle>
                Vermieten Sie Ihr <b>Ferienhaus, -wohnung, -bungalow</b> was
                auch immer – neben der touristischen Vermietung und
                <b>helfen Sie so aktiv</b>
                mit, Frauen und Kinder aus Gewaltsituationen heraus zu holen.
                <b
                  >Wir freuen uns auch besonders über dauerhafte Angebote wie
                  Mietwohnungen.</b
                >
                <v-btn
                  color="primary my-4"
                  href="mailto:unterkunft@sichere-zuflucht.de"
                >
                  Ich biete meine Unterkunft an
                </v-btn>
              </v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bp: this.$vuetify.breakpoint,
    };
  },
  computed: {
    css() {
      if (process.client) {
        const width = window.innerWidth;
        return width;
      } else {
        return null;
      }
    },
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 600;
        case "xl":
          return 800;
      }
    },
  },
};
</script>
