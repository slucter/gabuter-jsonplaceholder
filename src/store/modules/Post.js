import axios from 'axios'

const post = {
  namespaced: true,
  state: {
    getAllPost: [],
    getAllUser: []
  },
  getters: {
    getAllPost: state => {
      return state.getAllPost.slice().reverse()
    }
  },
  mutations: {
    GET_ALL_POST (state, data) {
      state.getAllPost = data
    },
    GET_ALL_USER (state, data) {
      state.getAllUser = data
    }
  },
  actions: {
    loadPost ({ commit }) {
      axios.get('http://localhost:3000/users/1/posts').then((result) => {
        commit('GET_ALL_POST', result.data)
      })
    },
    loadAllUser ({ commit }) {
      axios.get('http://localhost:3000/users/').then((result) => {
        commit('GET_ALL_USER', result.data)
      })
    },
    submitPost (context, data) {
      return new Promise((resolve) => {
        axios.post('http://localhost:3000/posts', {
          title: 'Gabut Social Euy',
          body: data,
          userId: 1
        }).then((result) => {
          resolve(result)
        })
      })
    },
    deletePost (context, data) {
      return new Promise((resolve) => {
        axios.delete(`http://localhost:3000/posts/${data.id}`).then((result) => {
          resolve(result)
        })
      })
    },
    editPost (context, data) {
      console.log(data)
      return new Promise((resolve) => {
        axios.put(`http://localhost:3000/posts/${data.dataedit.id}`, {
          id: data.dataedit.id,
          title: data.title,
          body: data.body,
          userId: data.dataedit.userId
        }).then((result) => {
          resolve(result)
        })
      })
    }
  }
}

export default post
