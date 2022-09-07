<!-- <template>
    <div>
        <h1>Completed Tasks</h1>
    <div>
        <table class="w-full">
            <thead class="bg-gray-50 border-b-2 border-gray-200 ">
                <tr>
                    <th class="w-12 p-3 text-sm font-semibold tracking-wide text-left">ID</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Description</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Date Added</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Deadline</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Date Completed</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Status</th>
                    <th class="w-32 p-3 text-sm font-semibold tracking-wide text-center">Actions</th>
                </tr>
            </thead>

            
                <tbody class="divide-y divide-gray-100" >
                    <tr class="bg-white" v-for='task in completetasks' :key='task.id'>
                    <!-- <td v-if="todo.id == ''">{{todo.id = ++i}}</td> -->
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.id }}</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.title }}</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.description }}</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.date_added }}</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.deadline }}</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.date_completed }}</td>
                    <td  v-if="task.completed != true"><button type="button" @click="toggleComplete(task.id, task.completed)" class="btn btn-info">Completed</button></td>
                     <td v-else><button  @click="toggleComplete(task.id, task.completed)">Due</button></td>
                    <!-- <span style="display:none">{{i=task.id}}</span> -->
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <div class="flex items-center space-x-2">
                            <input type="checkbox" class="accent-green-700 w-6 h-6">
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

                            <img src="../icons/edit.svg" alt="edit-icon" class="w-6 h-6 cursor-pointer" @click="showEditModal = true">
                            <img src="../icons/delete.svg" alt="delete-icon" class="w-6 h-6 cursor-pointer" @click="deleteTask(task.id)">
                        </div>
                    </td>
                    </tr>
                </tbody>
        </table>
    </div>
<div>
    </div>
</template> -->