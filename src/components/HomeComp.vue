<template lang="">
    <div id="home">
        <div class= "contain">
            <!-- <script type="module" src="https://unpkg.com/@splinetool/viewer@1.8.8/build/spline-viewer.js" async></script> -->
<!-- <spline-viewer hint loading-anim-type="spinner-small-dark" url="https://prod.spline.design/z6yilZEbjRsjY3Lq/scene.splinecode"><img src="data:image/png;base64,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" alt="Spline preview" style="width: 100%; height: 100%;"/></spline-viewer> -->
<!-- <script type="module" src="https://unpkg.com/@splinetool/viewer@1.8.9/build/spline-viewer.js" async></script> -->
<spline-viewer hint loading-anim-type="spinner-small-dark" url="https://prod.spline.design/z6yilZEbjRsjY3Lq/scene.splinecode"><img src="data:image/png;base64,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" alt="Spline preview" style="width: 100%; height: 100%;"/></spline-viewer>
            </div>
            
    </div>
                                            <!-- <hr> -->
                                            
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
    height: 700px;
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
    spline-viewer{
    width: 100%;
    height: 806px;
}
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