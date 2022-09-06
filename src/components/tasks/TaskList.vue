<script setup>
import {computed, ref, onMounted } from 'vue'

import { useStore } from "vuex"
import AddTask from './AddTask.vue';
const store = useStore()  

const editTask =()=>{
    store.commit('editTask',tasks)
}

onMounted(()=>{
    store.dispatch('fetchTasklist')
})
const tasks = computed(()=>{
    return store.state.tasks
})

let showModal = ref(false)

let showEditModal = ref(false)

function deleteTask(task){
    store.dispatch('deleteTask', task)
}
function select(event){
    alert = (event.currentTarget.id);

}

// $(document).ready(function() {
//     $("a").click(function(event) {
//         // this.append wouldn't work
//         $(this).append(" Edit Task");
//     });
// });
</script>

<template>
   <h1 align='center'></h1>
   <button @click="showModal = true" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
    Add Task
    </button>
        <div>
            <table id = "TaskList">
                <thread> 
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date Added</th>
                        <th>Completed</th>
                        <th>Date Completed</th>
                        <!-- <th>Action</th> -->
                    </tr>
                <tbody>
                    <tr v-for="task in tasks" :key="task.id">
                        <td>{{task.id}}</td>
                        <td>{{task.title}}</td>
                        <td>{{task.description}}</td>
                        <td>{{task.date_added}}</td>
                        <td>{{task.deadline}}</td>
                        <td>{{task.complested}}</td>
                        <td>{{task.date_completed}}</td>
                        <!-- <td>{{task.action}}</td> -->
                        
<!-- Modal toggle -->
<button @click="showEditModal = true,select($event)"  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" :data-modal-toggle="'#modal'+task.id">
  Edit Task
</button>

<!-- <a href="#" class="btn btn-primary btn-sm" data-toggle="modal" :data-target="'#editModal'+todo.id"><i class="fa fa-pencil"></i>&nbsp Edit Task</a> &nbsp -->
                                   

<!-- Main modal -->
<div v-show="showEditModal" :id="'modal'+task.id" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" @click="showEditModal = false" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="py-6 px-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white"> Edit Tasks</h3>
                <form  @submit.prevent="add"    class="space-y-6" action="#">
                    <div>
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input v-model="task.title" type="title" name="email" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="title" required="">
                    </div>
                    <div>
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                        <input v-model="task.description" type="description" name="description" id="description" placeholder="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                    </div>
                    <div>
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date Added</label>
                        <input v-model="task.date_added" type="description" name="Date Added" id="Date Added" placeholder="Date Added" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                    </div>
                    <div>
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Deadline</label>
                        <input v-model="task.deadline" type="description" name="Deadline" id="Deadline" placeholder="Deadline" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                    </div>
                    <div>
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date Complited</label>
                        <input v-model="task.date_completed" type="description" name="Date Complited" id="Date Complited" placeholder="Date Complited" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Task</button>
                    
                </form>
            </div>
        </div>
    </div> 
</div>    

                        <!-- <td><button  onclick="delete(task .id)">delete</button></td> -->
                        <!-- <td><button @click="deleteTask(task)">delete</button></td> -->
                       <td><button @click="deleteTask(task)" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
  Delete
</button>
</td>
<!-- <td>
    <div class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" @click="$emit('close-delete')">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="p-6 text-center">
                    <img src="../../assets/img/icons8-warning-64.png" alt="warning-icon" class="mx-auto mb-4 w-14 h-14">
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this Task?</h3>
                    <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Yes, I'm sure
                    </button>
                    <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600" @click="$emit('close-delete')">No, cancel</button>
                </div>
            </div>
        </div>
    </div>
</td> -->
                        
                    </tr>
                </tbody>
                </thread> 
                    
            </table>


        
        </div>
        
        <AddTask v-show="showModal" @close="showModal=false" class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"/>

 
</template>

<style scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
  text-align: center;

}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}


</style> 