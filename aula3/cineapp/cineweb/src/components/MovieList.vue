<template>
  <div id="movies">
    <h1>{{ title }}</h1>
    <p>{{welcome}}</p>

    <table class="tabela"> 
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
        data: [
          { id: 1,
            name: "Deadpool2",
            year: 2018,
            cast: ["Ryan Reynolds", "Josh Brolin"],
            plot: "O Super soldado Cable vem do futuro com a missão..."
          },
          { id:2,
            name: "Vingadores Era de Ultron",
            year: 2015,
            cast: ["Robert Downey Jr.", "Eliabeth Olsen"],
            plot: "Ao tentar proteger o planeta de ameaças Tony Stark..."
          },
          { id:3,
            name: "Vingadores Endgame",
            year: 2019,
            cast: ["Robert Downey Jr.", "Chris Evans"],
            plot:
              "Apos Thanos eliminar metade das criaturas vivas os vingadores..."
          }
        ]
      }
    };
  }
};
</script>

<style>
.tabela{
    display:inline-block
}

</style>
