<template lang="">
    <div id= "about">
        <h1>About Comp</h1>
        {{$store.state.aboutMe}}
    </div>
</template>
<script>
export default {
    methods:{
        aboutData(){
            return this.$store.state.aboutMe
        }
    },
    computed:{
        getAboutMe(){
            return this.$store.dispatch('getAboutMe')
        }
    },
    mounted(){
        this.getAboutMe
    }
}
</script>
<style scoped>
#about{
    scroll-behavior: smooth;
    min-height: 100vh;
}
/* @media only screen and (max-width: 700px)
{
#about{
min-height: 60vh;
}} */
    
</style>