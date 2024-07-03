<template>
    <div id= "about">
        <h1>About Me</h1>
        <div data-aos="zoom-in-up">
            <h3>I am a aspiring web developer</h3>
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
.about-container{
    margin: 5cqi 10cqi;
    font-family: "Wittgenstein";
    font-size: 3.5cqi;
}

} 
    
</style>