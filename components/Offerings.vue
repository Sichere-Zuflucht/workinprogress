<template>
  <v-row style="max-width: 700px" class="mx-auto">
    <v-col cols="12" md="6">
      <v-hover v-slot="{ hover }">
        <v-card class="mx-auto" max-width="320">
          <v-img src="le-buzz-tVnm9I9jb8I-unsplash.jpg" height="200px">
            <v-expand-transition v-if="disabled">
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
            </v-expand-transition>
          </v-img>

          <v-card-title
            ><h3 class="text-h3 primary--text font-weight-bold mb-2">
              Beratung und Hilfe
            </h3>
          </v-card-title>

          <v-card-subtitle>
            in Form von <b>Online-Besprechungen</b> mit Fachleuten zu euren
            Themen. Diese könnt ihr von überall ganz
            <b>einfach und anonym</b> mit dem <b>Handy</b> machen.
          </v-card-subtitle>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6">
      <v-hover v-slot="{ hover }">
        <v-card class="mx-auto" max-width="320">
          <v-img src="erol-ahmed-9XiN0r2NWSM-unsplash.jpg" height="200px"
            ><v-expand-transition v-if="disabled">
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
              Schnelle Unterkunft
            </h3>
          </v-card-title>

          <v-card-subtitle>
            Du musst schnell zuhause raus? Pack deine Kinder ein und zieh in
            eine unserer verbündeten Ferienunterkünfte.
          </v-card-subtitle>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
