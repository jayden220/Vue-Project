<template>
  <div class="home">
    <div
    class="container">
    <spline-viewer-comp/>
  </div>
    <nav-bar-comp/>
    <home-comp/>
    <about-comp/>
    <edu-comp/>
    <skills-comp/>
    <projects-comp/>
    <test-comp/>
    <contact-comp/>
    <footer-comp/>

  </div>
</template>

<script>
// @ is an alias to /src
import SplineViewerComp from '@/components/SplineViewerComp.vue';
import NavBarComp from '@/components/NavBarComp.vue'
import HomeComp from '@/components/HomeComp.vue'
import AboutComp from '@/components/AboutComp.vue';
import EduComp from '@/components/EduComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
import ProjectsComp from '@/components/ProjectsComp.vue';
import TestComp from '@/components/TestComp.vue';
import ContactComp from '@/components/ContactComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default {
  name: 'HomeView',
  components: {
    NavBarComp,
    HomeComp,
    AboutComp,
    EduComp,
    SkillsComp,
    ProjectsComp,
    TestComp,
    ContactComp,
    FooterComp,
    SplineViewerComp
  }
}
</script>
