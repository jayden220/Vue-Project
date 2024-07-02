<template>
    <div>
        <div v-if="typeof aboutMe == 'string'">
            <slot name="about">
                <h1>aboutMe</h1>
            </slot>
        </div>
        <div>
            <slot name="projects"></slot>
            
        </div>
        <div>
            <slot name="education"></slot>

        </div>
        <div>
            <slot name="techskills"></slot>

        </div>
        <div>
            <slot name="softskills"></slot>

        </div>
        <div>
            <slot name="testimonials"></slot>

        </div>
    </div>
</template>
<script>
export default {
    props:['aboutMe','projects','education','techskills','softskills','testimonials']
        
    
}
</script>
<style lang="">
    
</style>