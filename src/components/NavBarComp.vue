<template>
    <div class="sticky-top">
        <nav class="navbar  bg-dark">
    <div class="container-fluid">
      <a class="brand">JAYDEN</a>
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
.bg-dark{
  color: aqua;
}
    .brand{
    text-decoration: none;
    color: #bbdbb7;
    }


   a{
    color: aliceblue;
    text-decoration: none;
    font-weight: 400;
    text-transform: uppercase;
    padding: .5em 0;
   } 
/*hover*/
 a::before,
 a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  /* background-color: #e40a0a; */
  background: radial-gradient(circle at 81.9% 53.5%, rgb(173, 53, 53) 16.3%, rgb(240, 60, 60) 100.2%);
  transition: all .5s ease;
  opacity: 0;
  transform: scaleX(0);
  z-index: 1;
}
 a::before {
  top: 1px;
  left: 0;
  transform-origin: left right;
}
 a::after {
  bottom: 2px;
  left: 2px;
  transform-origin: right left;
}
 a:hover::before,
 a:hover::after {
  opacity: 1;
  transform: scaleX(1);
}
 a:hover {
  color: rgb(240, 60, 60);
 

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