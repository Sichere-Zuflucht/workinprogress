<template>
  <div class="my-4">
    <v-container class="py-md-16">
      <h1 class="text-h1 mb-4 text-center primary--text">
        Niemand muss häusliche Gewalt aushalten.
      </h1>
      <h2 class="text-center secondary--text subtitle-1 mb-8">Auch du nicht</h2>
      <p class="text-center mx-auto" style="max-width: 530px">
        Wir bieten <b>Frauen und ihren Kindern aus Gewaltbeziehungen</b> Hilfe
        in Form einer persönlichen Online-Beratung und eine sichere Zuflucht an.
      </p>
    </v-container>
    <v-img src="paige-cody-bOVZ_f3fbQM-unsplash.jpg" max-height="300px"></v-img>
    <v-sheet color="grey lighten-5" class="pb-8"
      ><v-container>
        <h3 class="text-h2 mb-4 text-center secondary--text">
          Warum dieses Projekt für uns eine Herzensangelegenheit geworden ist?
        </h3>
        <p class="text-center font-weight-bold">
          Wir haben das mal zusammengefasst.
        </p>
        <v-carousel
          hide-delimiters
          :continuous="false"
          height="500"
          class="mb-8"
        >
          <v-carousel-item v-for="i in 7" :key="i"
            ><v-img height="500" :src="'pitch/' + i + '.jpg'" contain
          /></v-carousel-item>
        </v-carousel>
        <Offerings :disabled="true" />
      </v-container>
    </v-sheet>
    <v-container>
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
    </v-slide-group>
    <v-divider />
    <v-container>
      <v-row style="max-width: 700px" class="mx-auto">
        <v-col cols="12" md="6">
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
                <b>Frauen und ihre Kinder aktiv unterstützten</b> wollen. Im
                Besonderen suchen wir nach engagierten
                <b
                  >Psycholog*innen, Psychotherapeut*innen, Coach*innen,
                  Ärzt*innen, Anwält*innen</b
                >
                zu Ehe-Themen, <b>Sozialarbeiter*innen</b> aber auch
                <b>Frauen</b>, die es geschafft haben, sich aus ihrer
                <b>gewaltvollen Beziehung zu befreien</b>
                und nun anderen helfen möchten.
                <v-btn
                  color="primary my-4"
                  href="mailto:beratung@sichere-zuflucht.de"
                >
                  Anmeldung für Berater*innen
                </v-btn>
                <v-btn class="text-decoration-line-through" disabled text block
                  >mehr erfahren</v-btn
                >
              </v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="6">
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

              <v-card-title class="text-h3 primary--text font-weight-bold mb-2"
                >Liebe Unterkunfsbesitzer*innen, helfen Sie mit!
              </v-card-title>

              <v-card-subtitle>
                Vermieten Sie Ihr Ferienhaus, -wohnung, -bungalow was auch immer
                – neben der touristischen Vermietung und helfen Sie so aktiv
                mit, Frauen und Kinder aus Gewaltsituationen heraus zu holen.
                Wir freuen uns auch besonders über dauerhafte Angebote wie
                Mietwohnungen.
                <v-btn
                  color="primary my-4"
                  href="mailto:unterkunft@sichere-zuflucht.de"
                >
                  Ich biete meine Unterkunft an
                </v-btn>
                <v-btn class="text-decoration-line-through" text block disabled
                  >mehr erfahren</v-btn
                >
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
  computed: {
    css() {
      if (process.client) {
        const width = window.innerWidth;
        return width;
      } else {
        return null;
      }
    },
  },
};
</script>
