import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    ausbildung:[
      {type:'tauchen', title:'Tauchkurs - Amateur', lek: 3},
      {type:'tauchen', title:'Tauchkurs - Fortgeschritten', lek: 6},
      {type:'tauchen', title:'Tauchkurs - Profi', lek: 9},
      {type:'stand-up-paddle', title:'Stand-Up-Paddle-Kurs - Amateur', lek: 2},
      {type:'stand-up-paddle', title:'Stand-Up-Paddle-Kurs - Fortgeschritten', lek: 4},
      {type:'stand-up-paddle', title:'Stand-Up-Paddle-Kurs - Profi', lek: 6},
      {type:'surfing', title:'Surfkurs - Amateur', lek: 3,
        _cellVariants: { title: 'info', lek: 'danger', sem: 'warning' }},
      {type:'surfing', title:'Surfkurs - Fortgeschritten', lek: 5,
        _cellVariants: { title: 'info', sem: 'warning' }},
      {type:'surfing', title:'Surfkurs - Profi', lek: 7,
        _cellVariants: { title: 'info', sem: 'warning' }}
    ]
  },
  getters: {
    tauchen(state) {
      return state.ausbildung.filter(fach => fach.type === 'tauchen');
    },
    abu(state) {
      return state.ausbildung.filter(fach => fach.type === 'stand-up-paddle');
    },
    egk(state) {
      return state.ausbildung.filter(fach => fach.type === 'surfing');
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
