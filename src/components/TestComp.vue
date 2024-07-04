<template>
    <div id="test">
        <h1>Testimonials</h1>
        <card-comp>
        <template #testimonials>
                <div v-for="test in testsData()" :key="test" class="test-container" data-aos="flip-left">
                    <div>
                        <h1>{{test.name}}</h1>
                        <img :src=test.image>
                        <p>{{test.message}}</p>


                    </div>
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
    #test{
    padding-top: 50px;
    scroll-behavior: smooth;
    min-height: 90cqi;
    background: radial-gradient(circle at 81.9% 53.5%, rgb(173, 53, 53) 16.3%, rgb(240, 60, 60) 100.2%);
    color: aliceblue;
}
.test-container{
    
    border: 2px red solid;
    gap: 2em;
    margin: 5em auto;
    width: 50em;
}
img{
    width: 15cqi;
    border-radius: 25px;
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
    border: 2px red solid;
    gap: 10em;
    margin-bottom: 5cqi;
    width: 70cqi;
}
img{
    width: 100%;
}
}
</style>