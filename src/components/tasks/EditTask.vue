<template>
    <div>
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" @click="showEditModal = false" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="py-6 px-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white"> Edit Tasks</h3>
                <form  @submit.prevent="editTask(task.id)"    class="space-y-6" action="#">
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
                        <input v-model="task.date_added" type="date" name="Date Added" id="Date Added" placeholder="Date Added" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                    </div>
                    <div>
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Deadline</label>
                        <input v-model="task.deadline" type="date" name="Deadline" id="Deadline" placeholder="Deadline" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                    </div>
                    <div>
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date Complited</label>
                        <input v-model="task.date_completed" type="date" name="Date Complited" id="Date Complited" placeholder="Date Complited" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Task</button>
                    
                </form>
            </div>
        </div>
</div>
</template>
<script>
export default{
    setup() {
        return{}
    },
    computed: {
        task(){
            return this.$store.state.tasks.find(t => t.id == this.$route.params.id)
        }
    },
    methods: {
        editTask(id){
            this.$store.dispatch("editTask", {id}).then(this.$router.push("/"))
        }
    },
}


</script>
