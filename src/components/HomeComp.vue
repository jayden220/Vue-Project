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
    background-size:80em;
    background-repeat: no-repeat;
    /* background-image: url('https://jayden220.github.io/hostedImages/images/20240422_115543.jpg'); */
    filter: grayscale(30%);
    /* background-image: url(https://jayden220.github.io/hostedImages/images/chess-10327_256.gif); */
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
.auto-type{
    overflow: hidden;
  border-right: .15em solid rgb(149, 71, 151);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
    
}
.name{ overflow: hidden;
  white-space: nowrap;
  /* margin: 0 auto; */
  letter-spacing: .15em;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
    
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color:   rgb(175, 75, 186); }
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