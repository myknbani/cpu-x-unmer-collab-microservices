<template>
  <footer
    v-if="$slidev.nav.currentPage < $slidev.nav.total"
    class="absolute bottom-0 p-4 mt-auto flex justify-between items-center w-full text-primary dark:text-white z-10"
  >
    <div 
      class="mb-0 flex items-center" 
      v-if="$slidev.nav.currentPage === 1"
    >
      <span class="h-8 mr-4 font-bold">Richard Michael Coo</span>
    </div>
    <div 
      class="mb-0 flex items-center" 
      v-if="$slidev.nav.currentPage !== 1"
    >
      <a href="https://z-p3-scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/309450222_1062966344366669_1037322102534906973_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEGBBueoUAabPmcQzNciItg5LRQaDeVthTktFBoN5W2FJ7HszIHWPQBgZwnEqdam_T9anWJsgtys2bVjGZYWdz8&_nc_ohc=YeLTi3yFG58AX-kWm5E&_nc_ht=z-p3-scontent.fceb2-2.fna&oh=03_AdSGum-etRMHvP1teARl1CZ0j-79rcDYS11jrGS6wXV7-A&oe=637211E0" target="_blank"
        ><img
          src="/collab-teaching.png"
          class="h-8 mr-4"
          alt="Event image"
      /></a>
    </div>
    
    <div id="socials" style="display: inline">
      <a href="https://twitter.com/myknbani"><logos-twitter /></a> 
      <a href="https://gitlab.com/myknbani"><logos-gitlab class="octocat" /></a> 
      <a href="https://github.com/myknbani"><logos-github-icon /></a> 
      @myknbani
    </div>
  </footer>
</template>

<style scoped>
#socials a {
  margin-right: 2px;
}

html:not(.dark) #socials {
  color: black;
}

html.dark #socials {
  color: white !important;
}
</style>