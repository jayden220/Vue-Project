<template lang="">
    <div id="home">
        <h1>Home comp</h1>
        <div class="name-contain">
         <h1 class="name">Hi I'm <span class="auto-type">Jayden Van Rooyen.</span></h1>
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
    background: rgba(255, 0, 0, 0.668);
}

.name-contain{
    animation: typing 5s, cursor .5s step-end infinite;
    border: 2px solid red;
}
.name{
    color: chartreuse;
    margin: 2em;
    text-align: left;
    border: 2px solid red;

}
@keyframes typing{
    from {width: 0 }
}
@keyframes cursor{
    50% {
        border-color: transparent;
    }
}

@media only screen and (max-width: 700px)
{
#home{
background: green

}
h1{
    font-size: 1.5em;
    font-weight: 800;
}
.name{
    position: initial;
    margin: 0 2.8em;
}
}


    
</style>