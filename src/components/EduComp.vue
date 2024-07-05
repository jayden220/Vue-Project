<template>
  <div id="education">
    <br>
    <h1>My Education</h1>
    <br>
    <card-comp>
      <template #education>
        <div class="education">
          <div v-for="edu in educationData()" :key="edu">
            <h4>{{ edu.placeOfInstitution[0] }}</h4>
            <p>{{ edu.year[0] }}</p>
            <p>{{ edu.description[0] }}</p>
            <div v-for="itemArray in edu" :key="itemArray">
              {{ itemArray.name }}
              <div v-for="item in itemArray" :key="item">
                <h5>{{ item.qual }}</h5>
                <!-- <p>{{ item.description] }}</p> -->
                <img :src="item.qualimg" class="imgblock" />
                <br>
              </div>
            </div>
          </div>

          <br />
         
          <!-- {{edu.qualifications}} -->
        </div>
        <!-- <div v-for="qual in quals.qual" :key="qual">
                    {{ qual.qual }}
                </div> -->
      </template>
    </card-comp>
  </div>
 
</template>
<script>
import CardComp from "./CardComp.vue";
export default {
  data() {
    return {
      quals: {},
    };
  },
  methods: {
    educationData() {
      return this.$store.state.education;
    },
    showQuals(value) {
      let certificates = this.$store.state.education.find(
        (item) => item.qual == value
      );
      this.quals = certificates;
    },
  },
  computed: {
    getData() {
      return this.$store.dispatch("getData");
    },
  },
  mounted() {
    this.getData;
  },
  components: {
    CardComp,
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Wittgenstein:ital,wght@0,400..900;1,400..900&display=swap');

#education {
    background: radial-gradient(circle at 81.9% 53.5%, rgb(173, 53, 53) 16.3%, rgb(240, 60, 60) 100.2%);
  padding-top: 50px;
  min-height: 100vh;
  scroll-behavior: smooth;
  color: aliceblue;
  font-family: 'Wittgenstein';
}

.imgblock {
  /* display: flex; */
  width: 200px;
  /* border: 2px solid; */
  display: grid;
  justify-content: center;
  margin: 0 auto;
}
.school {
  padding: -5em 0;
}
/* @media only screen and (max-width: 700px)
{
#education{
min-height: 60vh;
}} */
</style>
