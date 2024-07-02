<template>
    <div class="sticky-top">
        <nav class="navbar  bg-dark">
    <div class="container-fluid">
      <a class="brand">logo</a>
       <nav> 
        <a href="#">Home</a> |
        <a href="#about">About</a> |
        <a href="#education">Education</a> |
        <a href="#skills">Skills</a> |
        <a href="#projects">Projects</a> |
        <a href="#test">Testimonials</a> |
        <a href="#contact">Contact</a> 
       </nav>
    </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .brand{
    text-decoration: none;
    color: #bbdbb7;
    }


   a{
    color: aliceblue;
    text-decoration: none;
    font-weight: 400;
    text-transform: uppercase;
   } 
   @media only screen and (max-width: 684px){
    .brand{
        margin: 0 auto;
    }
    /* a{
        display: inline-flex;
    } */
   }
</style>