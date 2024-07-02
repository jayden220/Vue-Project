<template>
    <div id="test">
        <h1>Testimonials</h1>
        <card-comp>
        <template #testimonials>
                <div v-for="test in testsData()" :key="test" class="test-container">
                    <div>
                        <h1>{{test.name}}</h1>
                        <img src="{{test.image}}">
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
    scroll-behavior: smooth;
    min-height: 90cqi;
}
.test-container{
    
    border: 2px red solid;
    gap: 2em;
    margin: 2cqi 5cqi;
}
@media only screen and (max-width: 700px)
{
#test{
min-height: 60vh;
}
.test-container{
    display: grid;
    grid-column: initial;
    padding: 2em;
    margin: 4em;
    border: 2px red solid;
    gap: 2em;
}
}
</style>