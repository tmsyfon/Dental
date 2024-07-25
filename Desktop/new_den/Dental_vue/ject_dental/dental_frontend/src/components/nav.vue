<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <div class="name1">
          <div class="dd">
            <h1 class="haed1">:D</h1>
          </div>
          <div>
            <h2 class="haed2">ETECT</h2>
            <h2 class="haed2">ENTAL</h2>
          </div>
        </div>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

          <router-link to="/" class="nav-link icon" exact>
            <img src="../assets/image_1.png" alt="" width="32px">
          </router-link>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// Navigation component logic can go here if needed
export default {
  name: 'Nav',
};
</script>


<style scoped>

.haed1 {
  font-size: 3.7rem;
}

.haed2 {
  font-size: 20px;
}

.dd {
  margin-top: -10px;
}

.name1 {
  display: flex;
  margin-left: 30%;
  margin-bottom: -3rem;

}

h2 {
  color: #000000;
}

h1 {
  color: #4BB6CD;
  margin-bottom: 3rem;
}

.icon {
  margin-left: 80rem;
}

nav {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
</style>