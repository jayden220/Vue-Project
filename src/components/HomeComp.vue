<template lang="">
    <div id="home">
        <div class= "contain">
                <img class= "photo" src="https://jayden220.github.io/hostedImages/images/20240422_115543.jpg">
            <div class="name-contain">
                <h1 class="name">Hi I'm <span class="auto-type">Jayden Van Rooyen.</span></h1>
            </div>
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
    background-size:contain;
    background-repeat: no-repeat;
    /* background-image: url(https://jayden220.github.io/hostedImages/images/chess-10327_256.gif); */
}
.contain{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 3em 3em;
}
.photo{
    width: 400px;
    height: 500px;
    border-radius: 25px;
}
.auto-type{
    animation: typing 10s, cursor .5s step-end infinite;
    border-bottom: 4px dotted black;
}
.name{
    color: rgb(0, 0, 0);
    text-align: left;
    margin: 5em 0;
}

@keyframes typing{
    from {width: 50%}
}
@keyframes cursor{
    70% {
        border-color: transparent;
    }
}

@media only screen and (max-width: 600px)
{
#home{
background: rgb(1, 15, 1);
background-image: url();
background-repeat: no-repeat;
filter: blur(60%);




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