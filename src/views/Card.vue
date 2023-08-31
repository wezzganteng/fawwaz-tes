<template>
    <div class="bg-gray-200">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="data in  lisPokemon" :key="data.id" class="flex flex-containe">
          
    <a href="#" class=" m-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <span class="text-gray-600">#{{ data.id }}</span>
      <img class=" rounded-t-lg" :src="data.imageSrc" alt="pokemonData image" />
        <p class="mb-2 text-xl text-center font-bold tracking-tight text-red-600 dark:text-white">{{ data.name }}</p>
        <div class="flex">
          <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
        </div>
    </a>
    
        </div>
      </div>
    </div>
    
    
    </template>
    
    <script>
    export default {
      computed: {
        lisPokemon() {
          return this.$store.state.data.pokemonData
        }
      }
    }
    </script>