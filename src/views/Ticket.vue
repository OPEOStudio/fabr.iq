<template>
  <section class="container-custom">
    <!-- NAVBAR -->
    <!-- <navbar></navbar> -->

    <!-- MAIN SECTION -->
    <section class="container-custom" id="ticket">
      <!-- Page title -->
      <section id="title-row" class="container-custom-row">
        <i id="back-arrow" class="material-icons" @click="$router.go(-1)">arrow_back</i>
        <div class="container-custom-row">
          <div class="emoji">🏷️</div>
          <div>Nouveau ticket</div>
        </div>
      </section>

      <!-- Form -->
      <section id="form" class="container-custom">
        <!-- --------------------- -->
        <!-- Ticket caetegory -->
        <div class="form-line container-custom-row">
          <div class="label-block">
            <label>SUJET</label>
          </div>
          <div id="category-button-row" class="input-block container-custom-row">
            <b-radio-button
              class="category-button"
              v-for="(category, index) in categories"
              v-model="ticket.category"
              :native-value="category.value"
              type="is-client"
              size="is-medium"
              :key="index"
            >
              <i class="material-icons category-icon">{{category.icon}}</i>
              <span>{{category.name}}</span>
            </b-radio-button>
          </div>
        </div>

        <!-- --------------------- -->
        <!-- Ticket title -->
        <div class="form-line container-custom-row">
          <div class="label-block">
            <label>TITRE</label>
          </div>
          <div class="input-block">
            <input class="text-input" placeholder="Panne de la machine #12">
          </div>
        </div>

        <!-- --------------------- -->
        <!-- Ticket description -->
        <div class="form-line container-custom-row">
          <div class="label-block">
            <label>DESCRIPTION</label>
          </div>
          <div class="input-block">
            <textarea class="text-input" placeholder="Il faut remplacer la pièce XXX qui ne..."></textarea>
          </div>
        </div>

        <!-- --------------------- -->
        <!-- Team selection -->
        <div class="form-line container-custom-row">
          <div class="label-block">
            <label>ÉQUIPE</label>
          </div>
          <div class="input-block">
            <v-select :options="teams"></v-select>
          </div>
        </div>

        <!-- --------------------- -->
        <!-- Indicator selection -->
        <div class="form-line container-custom-row">
          <div class="label-block">
            <label>INDICATEUR(S)</label>
          </div>
          <div class="input-block">
            <v-select multiple :options="indicators"></v-select>
          </div>
        </div>

        <!-- --------------------- -->
        <!-- TAGS -->
        <div class="form-line container-custom-row">
          <div class="label-block">
            <label>ETIQUETTE(S)</label>
          </div>
          <div class="input-block">
            <v-select multiple :options="tags"></v-select>
          </div>
        </div>

        <!-- --------------------- -->
        <!-- PHOTOS -->
        <div id="upload-field" class="form-line container-custom-row">
          <div class="label-block">
            <label>PHOTO(S)</label>
          </div>
          <div id="upload-block" class="input-block container-custom">
            <b-upload
              v-model="ticket.dropFiles"
              multiple
              drag-drop
              v-if="ticket.dropFiles.length == 0"
            >
              <section id="upload-box" class="container-custom">
                <div class="content has-text-centered">
                  <i class="material-icons upload-icon">cloud_upload</i>
                  <p>Déposer la photo à télécharger</p>
                </div>
              </section>
            </b-upload>

            <div class="tags">
              <span v-for="(file, index) in ticket.dropFiles" :key="index" class="tag is-primary">
                {{file.name}}
                <button
                  class="delete is-small"
                  type="button"
                  @click="deleteDropFile(index)"
                ></button>
              </span>
            </div>
          </div>
        </div>

        <!-- --------------------- -->
        <!-- SUBMIT BUTTON -->
        <div id="button-block" class="container-custom-row">
          <button v-show="!loading" class="fabriq-btn" @click="submitTicket">Envoyer ticket</button>
          <circle-8 v-show="loading"></circle-8>
        </div>
      </section>
      <div>{{theseTeams}}</div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div>Footer</div>
    </section>
  </section>
</template>

<script>
import navbar from "@/components/navbar";
import date from "@/components/utils/date";
import vSelect from "vue-select";
import { Circle8 } from "vue-loading-spinner";

export default {
  components: {
    navbar,
    date,
    vSelect,
    Circle8
  },
  data: function() {
    return {
      loading: false,
      // teams: ["SOL/SOL2", "SOL2"],
      indicators: ["TRS", "TF0", "TDS", "RNC", "Accidents"],
      tags: ["RXC12-AAC", "RXC32-BTK", "Tank1", "Titane", "Aluminium"],
      categories: [
        {
          name: "HSE",
          value: "hse",
          icon: "security"
        },
        {
          name: "Qualité",
          value: "quality",
          icon: "check_circle"
        },
        {
          name: "Logistique",
          value: "logistics",
          icon: "timer"
        },
        {
          name: "Production",
          value: "production",
          icon: "playlist_add_check"
        }
      ],
      ticket: {
        category: null,
        dropFiles: []
      }
    };
  },
  computed: {
    teams() {
      return this.$store.state.teams.map(t => {
        return t.name;
      });
    }
  },
  methods: {
    deleteDropFile(index) {
      this.ticket.dropFiles.splice(index, 1);
    },
    submitTicket() {
      this.loading = true;
      console.log("ticket submitted");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global";

#ticket {
  min-height: 100vh;
}

.emoji {
  margin-right: 15px;
  margin-top: 10px;
}

#title-row {
  justify-content: center;
  align-content: flex-end;
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  margin-top: 30px;
}

#back-arrow {
  font-size: 40px;
  cursor: pointer;
  margin-left: 40px;
  // width: 20px;
}

#form {
  margin-top: 70px;
  font-size: 20px;
  // margin-right: 200px;
}

.form-line {
  margin-top: 50px;
  // width: 700px;
}

.label-block {
  margin-right: 30px;
  width: 150px;
  text-align: right;
}

.input-block {
  width: 600px;
}

#category-button-row {
  justify-content: flex-start;
}

.category-button {
  margin-right: 10px;
}

.category-icon {
  margin-right: 10px;
}

.text-input {
  font-size: 20px;
  width: 100%;
}

textarea {
  height: 40px;
  // width: 100%;
  padding: 5px;
  height: 120px;
}

#upload-field {
  height: 150px;
}

.upload-icon {
  font-size: 50px;
}

#upload-block {
  width: 600px;
  height: 175px;
  align-items: flex-start;
  justify-content: center;
}

#upload-box {
  padding: 20px;
}

.tag {
  font-size: 16px;
}

#button-block {
  margin-top: 70px;
  height: 50px;
}
</style>
