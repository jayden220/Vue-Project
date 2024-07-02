<template lang="">
    <div id="skills">
        <h1>Skills</h1>

        <card-comp>
        <template #techskills>
                <div v-for="tech in techData()" :key="tech">
                    {{tech.name}}
                </div>
            </template>
       </card-comp>
       <card-comp>
        <template #softskills>
                <div v-for="soft in softData()" :key="soft">
                    {{soft.name}}
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
        techData(){
            return this.$store.state.techskills
        
        },
        softData(){
            return this.$store.state.softskills
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
    #skills{
        min-height: 100vh;
        scroll-behavior: smooth;
    }
    /* @media only screen and (max-width: 700px)
{
#skills{
/* }} */
</style> 