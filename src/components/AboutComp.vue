<template>
    <div id= "about">
        <h1>About Me</h1>
        <br>
        <div data-aos="zoom-in-up">
            <div class="name-contain">
                <h1 class="name">Hi I'm <span class="auto-type">Jayden Van Rooyen.</span></h1>
            </div>
            <br>
            <h3>I am a aspiring web developer</h3>
             <img class= "photo" src="https://jayden220.github.io/hostedImages/images/20240422_115543.jpg">  
        </div>
        <hr>
        
        <card-comp :aboutMe ='aboutData()'>
            <template #about>
                <div class="about-container">
                    {{aboutData()}}
                </div>
            </template>
        </card-comp>
    </div>
    <hr>
</template>
<script>
import CardComp from './CardComp.vue';
export default {
    methods:{
        aboutData(){
            return this.$store.state.aboutMe
        }
    },
    computed:{
        getData(){
            return this.$store.dispatch('getData')
        }
    },
    mounted(){
        this.getData
    },
    components:{
        CardComp
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Wittgenstein:ital,wght@0,400..900;1,400..900&display=swap');

#about{
    padding-top: 50px;
    scroll-behavior: smooth;
    min-height: 100vh;
    color: aliceblue;
    background: radial-gradient(circle at 81.9% 53.5%, rgb(173, 53, 53) 16.3%, rgb(240, 60, 60) 100.2%);

}
.auto-type{
    overflow: hidden;
  border-right: .15em solid rgb(149, 71, 151);
  white-space: nowrap;
  margin: -12px auto;
  letter-spacing: .15em;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
    
}
.name{ overflow: hidden;
  white-space: nowrap;
  /* margin: 0 auto; */
  letter-spacing: .15em;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
    
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color:   rgb(175, 75, 186); }
}
.photo{
    width: 400px;
    height: 500px;
    border-radius: 25px;
}
.about-container{
    margin: 5cqi 10cqi;
    font-family: "Wittgenstein";
    font-size: 1.8cqi;
}
h1{
    font-family: "Wittgenstein";
    font-weight: 500;
}
h3{
    font-family: "Wittgenstein";
    font-weight: 300;
}
@media only screen and (max-width: 700px)
{
#about{
min-height: 60vh;
}
.name{
    font-size: 20px;
}

.about-container{
    margin: 5cqi 10cqi;
    font-family: "Wittgenstein";
    font-size: 3.5cqi;
}
.photo{
    width: 200px;
    height: 250px;
    border-radius: 25%;
    /* margin: 3em 0em; */
    filter: grayscale(2%);
    /* margin-right: -60em; */
    /* order: 1; */
    /* margin-left: -3em   ;  */
}

} 
    
</style>