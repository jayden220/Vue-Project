<template lang="">
    <div id="home">
        <div class= "contain">
            
            <!-- <spline-viewer url="https://prod.spline.design/lzPWUC6U7rd10gRA/scene.splinecode"></spline-viewer> -->
           
            <spline-viewer url="https://prod.spline.design/6eUur-ls2D1qMl5B/scene.splinecode"></spline-viewer>
                <!-- <img class= "photo" src="https://jayden220.github.io/hostedImages/images/20240422_115543.jpg">   -->
            </div>
            
    </div>
                                            <hr>
                                            
</template>
<script>
export default {
    
}
</script>
<style scoped>

#home{
    scroll-behavior: smooth;
    min-height: 100vh;
    filter: drop-shadow(70%);
    background-size:80em;
    background-repeat: no-repeat;
    /* background-image: url('https://jayden220.github.io/hostedImages/images/20240422_115543.jpg'); */
    filter: grayscale(30%);
    /* background-image: url(https://jayden220.github.io/hostedImages/images/chess-10327_256.gif); */
}
spline-viewer{
    width: 100%;
}
.contain{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    /* margin: 3em 3em; */
}
.photo{
    width: 400px;
    height: 500px;
    border-radius: 25px;
}




@media only screen and (max-width: 600px)
{

h1{
    font-size: 1.5em;
    font-weight: 800;
}
.contain{
    display: inline;
}
.name-contain{
    order: 1;
}
.name{
    /* position: initial; */
    /* margin: 0em auto; */
    width: 200px;
    text-wrap: pretty;
    margin: 0 auto;
    order: 1;
    font-family:"Wittgenstein" ;

    /* order: 1; */

}
.photo{
    width: 200px;
    height: 250px;
    border-radius: 25%;
    margin: 3em 0em;
    filter: grayscale(2%);
    /* margin-right: -60em; */
    /* order: 1; */
    margin-left: -3em   ; 
}
}


    
</style>