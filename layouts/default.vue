<template>
  <v-app>
    <v-app-bar app>
      <v-spacer />
      <v-toolbar-title class="pa-0"
        ><v-btn to="/" nuxt exact text plain :ripple="false"
          ><v-img contain width="150" src="Sichere-Zuflucht-Logo.svg" /></v-btn
      ></v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-card
      dark
      color="red"
      width="70"
      style="position: fixed; bottom: 30%; right: 0; z-index: 100"
      href="https://www.google.de/search?q=leckeres+essen"
      tile
    >
      <v-card-text class="pa-1 d-flex flex-column align-center">
        <v-icon small>mdi-eye-off</v-icon>
        <p style="font-size: 10px; line-height: 10px" class="text-center mb-0">
          Seite verstecken
        </p>
      </v-card-text>
    </v-card>
    <v-main style="hyphens: auto" class="pb-6">
      <nuxt />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      noUser: [
        {
          title: "Startseite",
          to: "/",
        },
        {
          title: "Über uns",
          to: "/",
        },
        {
          title: "Wie wir helfen",
          to: "/",
        },
        {
          title: "Wie du helfen kannst",
          to: "/",
        },
        {
          title: "Aktuelles",
          to: "/",
        },
      ],
    };
  },
};
</script>
