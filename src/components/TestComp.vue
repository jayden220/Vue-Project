<template>
    <div id="test">
        <h1>Testimonials</h1>
        <card-comp>
        <template #testimonials>
                <div v-for="test in testsData()" :key="test" class="test-container" data-aos="flip-left">
                    <div>
                        <h3>{{test.name}}</h3>
                        <br>
                        <img :src=test.image>
                        <br><br>
                        <p>{{test.message}}</p>


                    </div>
                </div>
            </template>
       </card-comp>
    </div>

</template>
<script>
import CardComp from './CardComp.vue';
export default {
    methods:{
        testsData(){
            return this.$store.state.testimonials
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

    #test{
    padding-top: 80px;
    scroll-behavior: smooth;
    min-height: 100vh;
    background: radial-gradient(circle at 81.9% 53.5%, rgb(173, 53, 53) 16.3%, rgb(240, 60, 60) 100.2%);
    color: aliceblue;
    font-family: "Wittgenstein";
    /* height: 3168px; */
}
hr{
    background: radial-gradient(circle at 81.9% 53.5%, rgb(173, 53, 53) 16.3%, rgb(240, 60, 60) 100.2%);
    margin: 0 0;
}
.test-container{
    
    /* border: 2px red solid; */
    gap: 2em;
    margin: 0em auto;
    width: 50em;
}
img{
    width: 15cqi;
    border-radius: 20px;
    /* margin: 1em; */
}
@media only screen and (max-width: 700px)
{
#test{
padding-top: 120px;
min-height: 60vh;
margin: 0 auto;
}
.test-container{
    display: flex;
    justify-content: center;
    grid-column: initial;
    /* padding: 2em; */
    height: min-content;
    /* margin: 2em 0; */
    /* border: 2px red solid; */
    gap: 10em;
    margin-bottom: 5cqi;
    width: 70cqi;
}
img{
    width: 100%;
}
}
</style>