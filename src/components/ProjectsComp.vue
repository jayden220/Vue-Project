<template>
    <div id="projects">
       <h1>Project</h1> 
       <card-comp>
        <template #projects>
                <div v-for="project in projectsData()" :key="project">
                    <div class="project-container" data-aos="zoom-in-right">
                        <h2>{{project.name}}</h2>

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
        projectsData(){
            return this.$store.state.projects
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

#projects{
    min-height: 100vh;
    scroll-behavior: smooth;
}
@media only screen and (max-width: 700px)
{
#projects{
min-height: 60vh;


}
.project-container{
    display: grid;
    grid-column: initial;
    padding: 2em;
    margin: 4cqi 3cqi;
    border: 2px red solid;
    gap: 2em;
}
}
    
</style>