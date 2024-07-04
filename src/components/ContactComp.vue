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
            <form action="https://formspree.io/f/mdoqynke" method="POST">
                <input type="text" name="name" placeholder="Name" required>
                <br>
                <input type="email" name="email" placeholder="Email" required>
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
#contact{
    padding-top: 50px;
    scroll-behavior: smooth;
    min-height: 90vh;
}
.contact-container{

    display: flex;
    justify-content: center;
    justify-content: space-between;
}
.contact-info {
    display: flex;
    flex-wrap: wrap;
    margin: 0 10em;
    border: 2px solid;
    width: 15em;
    padding: 0 auto;
}
.form-container{
    display: flex;
    flex-wrap: wrap;
    /* margin: 0 170px; */
}
input{
    margin: 2em 0;
}
textarea{
    width: 201px
}
@media only screen and (max-width: 700px)
{
#contact{
min-height: 60vh;
}
.contact-container{
    display: grid;
    justify-content: center;
}
.contact-info {
    display: flex;
    flex-wrap: wrap;
    margin: 5em auto;
    border: 2px solid;
    width: 15em;
    padding: 0 auto;
}
.contact-info-item{
    margin: 0 auto;
}
.form-container{
    margin: 0 auto;
}
form{
    margin: 0 auto;
    border: 2px solid;
}
form input{
    margin: 2em;
}
}


    
</style>