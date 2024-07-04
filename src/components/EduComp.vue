<template>
    <div id="education">
        <h1>Education comp</h1>
        <card-comp>
        <template #education>
                <div v-for="edu in educationData()" :key="edu">
                   <p>
                    {{ edu.placeOfInstitution[0] }}
                   </p> 
                   <p>
                       {{ edu.year[0] }}                   
                   </p> 
                
                    <div v-for="itemArray in edu" :key="itemArray">
                        <p>{{ itemArray.placeOfInstitution }}</p>
                        <p v-for="item in itemArray" :key="item">
                            
                            {{ item.name }}
                            {{ item.qualimg }}
                        </p>
                        
                    </div>

                    <br>
                    <p ></p>
                    <!-- {{edu.qualifications}} -->
                </div>
                <!-- <div v-for="qual in quals.qual" :key="qual">
                    {{ qual.qual }}
                </div> -->
            </template>
       </card-comp>
    </div>
    <hr>
</template>
<script>
import CardComp from './CardComp.vue';
export default {
    data(){
        return {
            quals: {}
        }
    },
    methods:{
        educationData(){
            return this.$store.state.education
        },
        showQuals(value){
            let certificates = this.$store.state.education.find(item => item.qual== value)
            this.quals = certificates
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
    padding-top: 50px;
    min-height: 100vh;
    scroll-behavior: smooth;
}
/* @media only screen and (max-width: 700px)
{
#education{
min-height: 60vh;
}} */
</style>