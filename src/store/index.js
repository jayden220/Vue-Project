import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe: null,
    education: null,
    softskills: null,
    techskills: null,
    projects: null,
    testimonials: null
  },
 
  mutations: {
    setAboutMe(state,payload){
      state.aboutMe = payload
    },
    setProjects(state, payload){
      state.projects = payload
    },
    setEducation(state, payload){
      state.education = payload
    },
    setTechSkills(state, payload){
      state.techskills = payload
    },
    setSoftSkills(state, payload){
      state.softskills = payload
    },
    setTestimonials(state, payload){
      state.testimonials = payload
    }
  },
  actions: {
    async getData({commit}){
        try {
        let info = await fetch('https://jayden220.github.io/projectInfo/info.json')
        let data = await info.json()
        let {aboutMe,projects,education,techskills,softskills,testimonials} = data
        commit('setAboutMe',aboutMe)
        commit('setProjects',projects)
        commit('setEducation',education)
        commit('setTechSkills',techskills)
        commit('setSoftSkills',softskills)
        commit('setTestimonials',testimonials)
      
    } catch (error) {
      console.log('error')
    }
      
    }
  },
  modules: {
  }
})
