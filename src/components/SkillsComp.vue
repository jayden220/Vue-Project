<template lang="">
    <div id="skills">
        <h1>Skills</h1>

        <card-comp>
        <template #techskills>
            <h4>Technical Skills</h4>
                <div v-for="tech in techData()" :key="tech">
                    
                    {{tech.name}}
                    <div class="logos">
                        <div class="logoslide">
                            <img :src=tech.image class="logo-img">
                        </div>
                    </div>
                </div>
            </template>
       </card-comp>
       <card-comp>
        <br><br>
        <template #softskills>
            <h4>Soft Skills</h4>
            <div class="soft-container">

                <div v-for="soft in softData()" :key="soft">
                    {{soft.name}}
                    <br>
                    {{soft.description}}
                    <br><br>
                    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    
                        <img :src=soft.image class="icons">
                    </div>
                    <br><br><br>
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
        padding-top: 50px;
        min-height: 100vh;
        scroll-behavior: smooth;
    }
    .logo-img{
        width: 400px;
        height: 400px;
    }
    .logos{
        display: flex;
        flex-direction: row;
        overflow: hidden;
        padding: 20px 0;
        filter: grayscale(50%);
        
        /* background: rebeccapurple; */
    }
    .logoslide{
        white-space: nowrap;
        animation: 9s slide infinite ease;
    }
    .logoslide img{
        height: 5em;
        width: 5cqi;
        margin: 0 40px;
    }
    .icons{
        width: 150px;
        height: 150px;
        animation: 1s bounce infinite ease;
    }
    @keyframes bounce {
        100%{
            transform: translateY(0px);
        }
        75%{
            transform: translateY(-2px);
        }
        50%{
            transform: translateY(-1px);
        }
    }
    
    @keyframes slide {
        100%{
            transform: translateY(0%);
        }
        90%{
            transform: translateY(0);
        }
        80%{
            transform: translateY(0%);
        }
        70%{
            transform: translateY(350%);
        }
        60%{
            transform: translateX(435%);
        }
    } 
    @media only screen and (max-width: 800px){
        .logoslide img{
            /* display: flex; */
            /* justify-content: center; */
            height: 4em;
            width: 4em;
            margin: 0 12.8em
        }
        @keyframes slide {
        100%{
            transform: translateX(160%);
        }
        50%{
            transform: translateX(120%);  
    }
    }
}
    @media only screen and (max-width: 400px)
{
    .logos{
        
        
        margin: 0 auto;
        padding: 20px 0;
        /* background: rebeccapurple; */
    }
    .logo img:hover{
        animation-play-state: paused;
    }
    @keyframes slide {
        100%{
            transform: translateY(-2%);
        }
        50%{
            transform: translateY(2%);
        }
        40%{
            transform: translateY(-4%);
        }
        20%{
            transform: translateY(4%);
        }
        5%{
            transform: translateY(-8%)
        }
        5%{
            transform: translateY(8%)
        }
       
    }
        

        .logoslide img{
            /* display: flex; */
            /* justify-content: center; */
            height: 2em;
            width: 2em;
            margin: 0 8.8em;
        }
        .logo img:hover{
            animation-play-state: paused;
        }
        .icons{
            width: 60px;
        height: 60px;
        }
    } 
    
</style> 