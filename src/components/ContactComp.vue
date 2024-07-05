<template lang="">
    <div id="contact">
        <h1>Contact me</h1>
        <div class="contact-container">
            <div class="contact-info">
                <div class="contact-info-item">
                    <i class="fas fa-map-marker-alt">Lets keep in touch</i>
                    <p>Belhar, Cape Town, 7493</p>
                    <p>jaydenvanrooyen87@gmail.com</p>
                    <p>+27 78 291 9890</p>
                </div>
            </div>
        <div class="form-container">
            <form action="https://formspree.io/jaydenvanrooyen87@gmail" method="POST">
                <p>Leave me a message</p>

                <input type="text" name="name" placeholder="Name" required>
                <br>
                <input type="email" name="email" placeholder="Email" required>
                <br>
                <input type="number" name="cellnumber" placeholder="Phone" required>
                <br>
                <textarea name="message" placeholder="Message" required></textarea>
            </form>
        </div>    
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Wittgenstein:ital,wght@0,400..900;1,400..900&display=swap');
h1{
    margin: 1em 0;
}
#contact{
    padding-top: 50px;
    scroll-behavior: smooth;
    min-height: 90vh;
    background: radial-gradient(circle at 81.9% 53.5%, rgb(173, 53, 53) 16.3%, rgb(240, 60, 60) 100.2%);
    color: aliceblue;
    font-family: 'Wittgenstein';
}
h1{
    font-family: 'Wittgenstein';

}
.contact-container{

    display: flex;
    justify-content: center;
    justify-content: space-between;
    margin: 0 15em;
}
.contact-info {
    display: flex;
    flex-wrap: wrap;
    /* margin: 0 10em; */
    background-color: black;
    color: aliceblue;
    border: 2px solid;
    width: 25em;
    border-radius: 20px;
    padding: 2em 5.5em;
}
form{
    width: 30em;
    margin-left: -5em;
    border: 2px solid aliceblue;
    border-radius: 20px;

}
.form-container{
    display: flex;
    flex-wrap: wrap;
    color: aliceblue;
    /* margin: 0 170px; */
}
input{
    margin: 2em 0;
    border-radius:10% ;
}
textarea{
    width: 201px
}
form{
    background-color: black;
    padding: 20px 10px;
}
@media only screen and (max-width: 1400px)
{
#contact{
min-height: 60vh;
background: radial-gradient(circle at 81.9% 53.5%, rgb(173, 53, 53) 16.3%, rgb(240, 60, 60) 100.2%);
color: aliceblue;
}
.contact-container{
    display: grid;
    justify-content: center;
    margin: 0 auto;
}
.contact-info {
    display: flex;
    flex-wrap: wrap;
    margin: 0em auto;
    border: 2px solid;
    width: 17em;

}
.contact-info-item{
    margin: 0 auto;
    margin-left: -4em;
}
.form-container{
    margin: 0 auto;
}
form{
    margin: 10em auto;
    border: 2px solid;
    width: 18em;
    
}
form input{
    margin: 2em;
}
}


    
</style>