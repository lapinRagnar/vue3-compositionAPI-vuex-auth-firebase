<template>
  <div class="home">

    <p>mon point - {{ points }}</p>
    <button @click="updatePoints(1)">add points</button>
    <button @click="updatePoints(-1)" >remove points</button>

    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur consectetur doloremque sunt ducimus enim iure animi fugit nulla et! Perferendis autem deleniti quo eum corrupti reiciendis voluptatem ab ducimus?</p>
        <div class="icons">
          <span>upvote or downvote this article: </span>
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const blogs = ref([
      { title: 'Why Coffee is Better than Tea', id: 1 },
      { title: '...Then I Took an Arrow in the Knee', id: 2 },
      { title: 'Mario vs Luigi, Ultimate Showdown', id: 3 },
    ])
    return { 
      blogs
    }
  },
  computed: {
    points(){                           // le points ici c'est 
      return this.$store.state.points
    }
  },
  
  methods: {
    // on peut utiliser d'autre nom que le nom de la fonction dans la mutations: {}
    updatePoints(points) {                    // le points ici c'est le nom de la fonction points() dans computed():{} mais on enleve le ()
      this.$store.commit('updatepoints', points)      // 'updatepoints', ici c'est le nom dans la mutations: {} - obligatoire
    }
  }
}
</script>