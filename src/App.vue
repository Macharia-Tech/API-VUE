<script setup>

import Navbar from './components/nav/navbar.vue';

  
const links = [
  // {id: 1, name: 'Home', path: '/'},
  // {id: 2, name: 'About Us', path: '/about'},
  // {id: 3, name: 'Tasks', path: '/tasks'}
]
  </script>
  
  <template>
   
    <Navbar  title="task manager" :links="links"/>

    <RouterView/>
  </template>
  
  