import axios from 'axios';

import {createStore } from 'vuex'

export default createStore({
    state:{
        tasks:[]
    },
         
    getters:{
        tasks:state =>{
            return state.tasks
        }
        // getaddedtasklist:(state) =>state.tasks

    },
    mutations:{
        SET_TASKS(state,tasks){
            state.tasks = tasks

        },
        DELETE(state,taskId){
            let tasks = state.tasks.filter(t =>t.id != taskId)
            state.tasks = tasks
        },
        ADD(state, task){
            let tasks = state.tasks.concat(task)
            state.tasks = tasks
            console.log (task);
        },

        EDIT(state,taskId){
            let tasks =state.tasks.filter(t => t.id !=taskId)
            state.tasks =tasks
            
        },
        

    } ,
    actions:{
        async fetchTasklist({commit}){
            
            try{
                const res =  await axios.get('https://tychak.github.io/')
                commit('SET_TASKS', res.data)
            }
            catch(error){
                alert(error)
                console.log(error);

            }
        },

        async deleteTask({commit},task){
            commit('DELETE', task.id)
    
        },

        async addTask({commit},task){
            commit('ADD',task)
        },

        async editTask({commit },task){
            commit('EDIT',task.id)

        },
        // async addTask({commit}, task) {
        //     await axios.post(url, task)
        //     .then(res => {
        //       commit('NEW_TASK', res.data.data)
        //     }).catch(err => {
        //       console.log('error', err)
        //     });
        //   }
        },
      
    },
   
)
    