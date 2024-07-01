import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe: null,
    education: null,
    skills: null,
    projects: null,
    testimonials: null
  },
  getters: {
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
  mutations: {
  },
  actions: {
    async getAboutMe({commit}){
      let info = await fetch('https://jayden220.github.io/projectInfo/info.json')
      let data = await info.json()
      let aboutMe,projects,education,techskills,softskills,testimonials = data
      commit('setAboutMe',aboutMe)
      commit('setProjects',projects)
      commit('setEducation',education)
      commit('setTechSkills',techskills)
      commit('setSoftSkills',softskills)
      commit('setTestimonials',testimonials)
      console.log(data);
      
    }
  },
  modules: {
  }
})
