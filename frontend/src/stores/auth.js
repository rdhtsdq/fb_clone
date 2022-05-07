import { defineStore } from "pinia";
import axios from 'axios';
import router from '../router/index'

export const useAuthStore = defineStore({
  id:'auth',
  state:() => ({
    item:[],
    token : null,
  }),
  actions: {
    async getToken(em,pass){
      this.token = ''

      try {
        await axios.post('http://127.0.0.1:8000/api/login',{email:em,password:pass})
        .then((result) => {
          this.token = result.data.access_token
          localStorage.setItem('token',JSON.stringify(this.token))
        })
      } catch (error) {
        console.log(error);
      }
    },
    async logout(){
      const t = JSON.parse(localStorage.getItem('token'))
      await axios.post('http://127.0.0.1:8000/api/logout',{Headers:{'Autorization':`Bearer ${t}`}})
      .then(() => {
        localStorage.removeItem('token'),
        router.push({path:'/'})
      })
    }
  }
})