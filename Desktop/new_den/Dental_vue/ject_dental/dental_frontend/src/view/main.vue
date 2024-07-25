<template>
    <div id="app">
      <Nav />
      <div class="box2">
        <div class="name_two">
          <h3 class="hh4">ROOM001</h3>
        </div>

        <div>
          <button type="submit" class="bb2">
            DETECT
          </button>
        </div>
      </div>

      <div class="bar">
        <form action="#">
          <input type="search" placeholder="Seach...">
        </form>

        <form action="#">
          <input type="date">
        </form>

        <form action="#">
          <input type="time">
        </form>
      </div>

      <div style="margin-top: 2rem;">
        <div class="boxname" v-for="item in data_name" :key="item">
          <div class="b_num" @click="click(item.history_id)" type="button">
            {{ item.num }}
          </div>

          <div class="b_name" @click="click(item.history_id)" type="button">
            {{ item.name }}
          </div>

          <div class="b_date">
            {{ item.date }}
          </div>

          <div class="b_time">
            {{ item.time }}
          </div>

          <div type= 'button' name="delete" class="b_img" @click="delet()">
            <img src="../assets/image 16-Photoroom.png" alt="" height="45px">
          </div>
        </div>

      </div>
  
    </div>
  </template>
  
  <!-- เรียกใช้data ที่สร้างแยกไว้ -->
  <script>
  import Nav from '../components/nav.vue';
  import name from '../data/dataname';
  
  // เรียกใช้data ที่สร้างแยกไว้
  export default {
    name: 'App',
    components: {
      Nav,
    },
    data() {
    return {
      data_name: name
      }
    },
    methods: {
      click(id){
        alert(id)
      },
      delet(){
        alert("delete")
      }
    },
  };
  </script>
  
  <style>
  .name_two {
    margin-right: 68rem;
  }
  
  .hh4 {
    color: #4BB6CD;
    font-size: 25px;
  }

  .bb2 {
    padding: 10px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    background-color: #AFE4F4;
    width: 150%;
    height: 3rem;
    font-size: 20px;
  }
  .box2{
    display: flex;
    margin-top: -15rem;
  }

  form{
      margin-right: 20px
    }
    
  input[type=search]{
    width: 650px;
    height: 50px;
    font-size: 16px;
    padding: 0px 10px 0px 20px;
    border-radius: 10px;
    outline: none;
    border: solid gray 2px;
    }

  input[type="date"]{
    cursor: pointer;
    height: 50px;
    width: 200px;
    border: solid gray 2px;
    border-radius: 10px;
    outline: none;
  }

  input[type="time"]{
    cursor: pointer;
    height: 50px;
    width: 200px;
    border: solid gray 2px;
    border-radius: 10px;
    outline: none;
  }

  .bar {
    display: flex;
    margin-top: 18rem;
  }

  .boxname {
    display: flex;
    margin-top: 1rem;
    height: 80px;
    width: 1200px;
    border: solid gray 2px;
    border-radius: 10px;
    outline: none;
    text-align: center;
  }

  .b_num {
    width: 50px;
    height: 60px;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
    padding-top: 1%;
    font-size: 25px;
  }
  .b_name {
    width: 580px;
    height: 60px;
    margin-top: 10px;
    margin-right: 20px;
    padding-top: 1%;
    font-size: 25px;
  }
  .b_date{
    width: 200px;
    height: 60px;
    margin-top: 10px;
    margin-right: 20px;
    padding-top: 1%;
    font-size: 25px;
  }
  .b_time{
    width: 200px;
    height: 60px;
    margin-top: 10px;
    margin-right: 30px;
    padding-top: 1%;
    font-size: 25px;
  }
  .b_img {
    margin-top: 15px;
    margin-right: 20px;
  }
  </style>