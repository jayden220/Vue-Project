<template>
    <div id= "about">
        <h1>a</h1>
        
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
#about{
    scroll-behavior: smooth;
    min-height: 100vh;
}
.about-container{
    margin: 5cqi 10cqi;

}
@media only screen and (max-width: 700px)
{
#about{
min-height: 60vh;
}


} 
    
</style>