<template>
    <nav class="sticky top-0 nav-bar relative px-6 py-6 flex justify-between items-center bg-gray-50">
        <router-link class="text-3xl font-bold leading-none" to="/">
            <img class="h-16  w-20 rounded-full" src="/resources/atis-assets/logo/Plogo.jpeg" alt="" >
        </router-link>
        <div class="lg:hidden">
            <button class="navbar-burger flex items-center text-gray-400 p-3">
                <svg class="block h-4 w-4 fill-current" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li><router-link class="text-sm text-green-400 hover:text-green-500 font-bold" to="/">Home</router-link></li>
            <li class="text-gray-800">
                <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
            </li>
            <li><router-link class="text-sm text-green-400 hover:text-green-500 font-bold" to="/About">About Me</router-link></li>
            <li class="text-gray-800">
                <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
            </li>
            <li><router-link class="text-sm text-green-400 hover:text-green-500 font-bold" to="/Showcase">My Showcase</router-link></li>
            <li class="text-gray-800">
                <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
            </li>
            <li><router-link class="text-sm text-green-400 hover:text-green-500 font-bold" to="/Resume">Resume</router-link></li>
            <li class="text-gray-800">
                <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
            </li>
            <li><router-link class="text-sm text-green-400 hover:text-green-500 button-green font-bold inline-block font-semibold" to="/Company">My Company</router-link></li>


        </ul>
        <router-link class="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-green-600 font-bold rounded-l-xl rounded-t-xl transition duration-200" to="/Contact">Contact Me</router-link>

    </nav>


</template>

<script setup>





</script>

<style scoped>

</style>
