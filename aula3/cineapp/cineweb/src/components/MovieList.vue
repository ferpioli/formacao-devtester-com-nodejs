<template>
  <div id="movies" class="container">
    <h1>{{ title }}</h1>
    <p>{{welcome}}</p>

    <table class="table table-hover" v-if="movies.data.length > 0">
      <thead>
        <th>Nome</th>
        <th>Ano</th>
        <th>Sinopse</th>
      </thead>
      <tbody>
        <tr v-for="movie in movies.data" :key="movie.id">
          <td>{{movie.name}}</td>
          <td>{{movie.year}}</td>
          <td>{{movie.plot}}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class= "alert alert-info">Oops! nenhum filme encontrado.</div>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  data() {
    return {
      title: "cadastro de filmes",
      welcome: "seja bem vindo!",
      movies: {
        data: []
      }
    };
  },
  methods: {
    getMovies() {
      window.axios.get("/movies").then(res => {
        console.log(res);
        this.movies.data = res.data.data;
      });
    }
  },
  mounted() {
    this.getMovies();
  }
};
</script>


