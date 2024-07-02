<template>
    <div id="education">
        <h1>Education comp</h1>
        <card-comp>
        <template #education>
                <div v-for="edu in educationData()" :key="edu">
                    {{edu.placeOfInstitution}}
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
        educationData(){
            return this.$store.state.education
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
#education{

    min-height: 100vh;
    scroll-behavior: smooth;
}
/* @media only screen and (max-width: 700px)
{
#education{
min-height: 60vh;
}} */
</style>