<template>
    <div id="projects">
       <h1>My Work</h1>     
       <card-comp>
        <template #projects>
                <div v-for="project in projectsData()" :key="project">
                    <div class="project-container" data-aos="zoom-in-right">
                        <h2>{{project.name}}</h2>
                        <img :src=project.image>
                        <br><br>
                        <p>{{project.description}}</p>
                        <div class="buttons">

                            <button class="vercel">
                                <a :href="project.vercel" target="_blank">View</a>
                            </button>
                            <button class="git">
                                <a :href="project.github" target="_blank">g</a>
                            </button>
                        </div>

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
@import url('https://fonts.googleapis.com/css2?family=Wittgenstein:ital,wght@0,400..900;1,400..900&display=swap');

#projects{
    background: radial-gradient(circle at 81.9% 53.5%, rgb(173, 53, 53) 16.3%, rgb(240, 60, 60) 100.2%);
    padding-top: 50px;
    min-height: 100vh;
    scroll-behavior: smooth;
    color: aliceblue;
    font-family: "Wittgenstein";
}
.buttons{
    display: flex;
    justify-content: center;

}
button{
    margin: 2em;
}
.vercel a{
    text-decoration: none;
    color: white;
    /* margin: 0 2em; */

}
.git a{
    text-decoration: none;
    color: white;
}
button{
    background: rgb(0, 0, 0);
    width: 5em;
    height: 2em;
}
img{
    width: 20em;
    height: 20em;
    border-radius:50% ;
}
@media only screen and (max-width: 700px)
{
    .buttons{
    display: flex;
    justify-content: space-between;
}
#projects{
min-height: 60vh;


}
.project-container{
    display: grid;
    grid-column: initial;
    padding: 2em;
    margin: 4cqi 3cqi;
    
    gap: 2em;
}
img{
    width: 10em;
    height: 10em ;
    margin: 0 auto;
}
}
    
</style>