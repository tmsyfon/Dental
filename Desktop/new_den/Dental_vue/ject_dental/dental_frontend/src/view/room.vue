<template>
  <div id="app">
    <Nav />
    <div class="name_one">
      <h3 class="hh3">SELECT ROOM</h3>
    </div>

    <div class="container boxset">
      <div class="row">
        <div class="col-3  boxx" v-for="item in data_room" :key="item" >
          <button type="submit" class="bb1">
            {{ item.number_room }}
          </button>
        </div>
      </div>

    </div>

  </div>
</template>

<!-- เรียกใช้data ที่สร้างแยกไว้ -->
<script>
import Nav from '../components/nav.vue';
import room from '../data/dataroom';

// เรียกใช้data ที่สร้างแยกไว้
export default {
  name: 'App',
  components: {
    Nav,
  },
  data() {
    return {
      data_room: room
    }
  },
};
</script>

<style>
.boxx{
  margin-left: 90px;
  margin-bottom: 30px;
}
.name_one {
  width: 100%;
  margin-left: -1rem;
  margin-top: 8rem;
}

.hh3 {
  color: #4BB6CD;
  font-size: 26px;
}

.boxset {
  margin-top: 2rem;
}

.bb1 {
  padding: 30px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background-color: #AFE4F4;
  width: 100%;
  height: 8rem;
  font-size: 36px;
}

</style>