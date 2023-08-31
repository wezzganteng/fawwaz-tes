<template>
    <div class="bg-gray-100 h-screen py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row gap-4 m-10">
                <div class="md:w-1/4">
                    <center>
                        <svg class="h-40 w-40 text-red-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    </center>
                    
                    <p class="mb-2 text-xl text-center font-bold tracking-tight text-red-600 dark:text-white">Tambah Image</p>
                </div>
                <div class="md:w-3/4">
                    <section class="bg-gray-50 dark:bg-gray-900">
         
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-red-600 md:text-2xl dark:text-white">
                      Informasi Umum
                  </h1>

                  <p class="text-xl text-gray-500 ">
                      Nomor
                  </p>

                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white">
                    #16
                  </h1>


                  
                  <form class="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label class="text-xl block mb-2 text-sm font-large text-gray-900 dark:text-white">Nama</label><br>
                          <input type="email" name="email" id="email" class="bg-red-50 border border-red-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">


                      </div>

                      <div>
                                        
<label class="text-xl block mb-2 text-sm font-large text-gray-900 dark:text-white">Types</label>
<select  class="bg-red-50 border border-red-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected></option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
                      </div>

                      <div>
                                        
<label class="text-xl block mb-2 text-sm font-large text-gray-900 dark:text-white">Clasification</label>
<select  class="bg-red-50 border border-red-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected></option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
                      </div>

                      <div>
                         
<label class="text-xl block mb-2 text-sm font-large text-gray-900 dark:text-white">Resiant</label>
<select  class="bg-red-50 border border-red-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected></option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>

                      </div>
                    
                    
                  </form>
              </div>
              
    </section>
                </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-100 h-screen py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row gap-4 m-10">
                <div class="md:w-1/4">
                 
                    
                    
                </div>
                <div class="md:w-3/4">
                    <section class="bg-gray-50 dark:bg-gray-900">
         
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-red-800 md:text-2xl dark:text-white">
                        Evolution
                        </h1>
                        


                        <a href="#" class="flex items-center justify-center rounded-md bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
      
      Tambah</a
    >
                  
              </div>
              
    </section>
    <br><br>
    <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Batal</button>
    <button type="button" class="bg-gray-500 text-white hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-900">Tambah</button>
                </div>
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