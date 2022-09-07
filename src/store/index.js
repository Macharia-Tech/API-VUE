import axios from 'axios';

import {createStore } from 'vuex'

export default createStore({
    state:{
        tasks:JSON.parse(localStorage.getItem("TASKS")) ? JSON.parse(localStorage.getItem("TASKS")): [],
    },
         
    getters:{
        tasks:state => {
            return state.tasks;
        },
        duetasks(state){
            return state.tasks.filter(task => task.completed == false)
        },
        completetasks(state){
            return state.tasks.filter(task => task.completed == true)
        }

        // getaddedtasklist:(state) =>state.tasks

    },
    mutations:{
        SET_TASKS(state,tasks){
            //state.tasks = tasks
            localStorage.setItem("TASKS", JSON.stringify(state.tasks))
            state.tasks = JSON.parse(localStorage.getItem("TASKS"))

        },
        DELETE(state,{id}){
            let tasks = state.tasks.filter(t =>t.id != id)
            state.tasks = tasks
            var delTask = JSON.parse(localStorage.getItem("TASKS"))
            for (var i =0 ; i < delTask.length ; i++ ){
                if (delTask[i].id== id){
                    delTask = state.tasks
                }
            }
            localStorage.setItem("TASKS", JSON.stringify(delTask));
        },

        TOGGLE_TASK(state, { id, completed }) {
            state.tasks.find(task => task.id == id).completed = completed
            var toggleTask = JSON.parse(localStorage.getItem("TASKS"))
            for (var i =0 ; i <toggleTask.length; i++){
                if(toggleTask[i].id == id){
                    toggleTask = state.tasks
                }
            }
            localStorage.setItem("TASKS", JSON.stringify(toggleTask));

        },


        ADD(state, task){
            let tasks = state.tasks.concat(task)
            localStorage.setItem("TASKS", JSON.stringify(tasks))
            state.tasks = JSON.parse(localStorage.getItem(tasks))
            console.log (task);
        },

        EDIT(state, {id}){
            var delTask = JSON.parse(localStorage.getItem("TASKS"))
            for (var i =0 ; i < delTask.length ; i++ ){
                if (delTask[i].id== id){
                    delTask = state.tasks
                }
            }
            localStorage.setItem("TASKS", JSON.stringify(delTask));
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

        async deleteTask({commit},{id}){
            commit('DELETE', {id})
    
        },

        async addTask({commit},task){
            commit('ADD',task)
        },

        async editTask({commit }, {id}){
            commit('EDIT',{id})

        },
        async toggleTask({commit}, { id, completed }) {
            //Api call that will toggle the completed state of the todo in the database 
            commit('TOGGLE_TASK', { id, completed })
        }
    
        },
      
    },
   
)
    