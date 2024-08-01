<template>
  <div id="app">
    <Nav />
    <div class="m_box">
      <div class="lef">
        <div class="bar1">
          <form action="#">
            <input type="input" placeholder="Name..." />
          </form>
    
          <div class="bar2">
            <form action="#">
              <input type="date" />
            </form>
    
            <form action="#">
              <input type="time" />
            </form>
          </div>
        </div>
    
        <div class="boximage">
          <h5 class="f1">Upload your File :</h5>
          <div class="drag-area">
            <div class="icon">
              <i class="fas fa-images"></i>
            </div>
            <span class="header">Drag & Drop</span>
            <span class="header">or <span class="button">browse</span></span>
            <input type="file" style="height: 200px" />
            <span class="support">Supports: JPEG, JPG, PNG</span>
          </div>
        </div>
  
        <div>
          <button type="submit" @click="" class="buttstart"> 
              <!-- คำสั่งคลิ้ก ประกาศเพื่อทำฟังก์ชั่นข้างล่างต่อ -->
              START DETECT
          </button>
        </div>
      </div>
  
  
      <div class="right" style="border: 2px solid black;">

        <div class="barr2" style="border: 2px solid black;">
  
          <div class="bbn" style="border: 2px solid black;">
            Naphatsorn Kongngam
          </div>
  
          <div class="bbd" style="border: 2px solid black;">
            22/04/2024
          </div>
  
          <div class="bbt" style="border: 2px solid black;">
            12:40:52
          </div>
  
          <div type= 'button' name="delete" class="bbu">
            <img src="../assets/image 26-Photoroom.png" alt="" height="45px">
          </div>   
        </div>
  
        <div class="overf">
          <div v-for="index in 2">
            <div class="n_img" style="border: 2px solid black;">
              img 001
            </div>
      
    
            <div class="img_detect" style="border: 2px solid black;">
              <div class="img_one" style="border: 2px solid black;">
      
              </div>
      
              <div class="img_two" style="border: 2px solid black;">
      
              </div>
            </div>
    
            <div class="info_detect">
              <div class="info_detect1">
                <table>
                  <tr>
                    <th>No.</th>
                    <th>Instructure</th>
                    <th>Amount</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>a</td>
                    <td>2</td>
                  </tr>
                </table>
              </div>
      
              <div class="info_detect2">
                <div>
                  <table>
                    <tr>
                      <th>No.</th>
                      <th>Instructure</th>
                      <th>Amount</th>
                    </tr>
                    <tr v-for="index in 30" >
                      <td>1</td>
                      <td>a</td>
                      <td>2</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
  
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- เรียกใช้data ที่สร้างแยกไว้ -->
<script>
import Nav from "../components/nav.vue";

// เรียกใช้data ที่สร้างแยกไว้
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
.m_box{
  display: flex;
}
.lef{
  margin-right: 4%;
}
.right{
  margin-top: 6rem;
  width: 62rem;
  height: 36rem;
}
.overf{
  overflow-y: scroll;
  height: 85%;
  
}
.bar1 {
  margin-top: 7rem;
}
.bar2 {
  display: flex;
}
.f1 {
  color: gray;
}
form {
  margin-right: 1rem;
}
input[type="input"] {
  width: 450px;
  height: 50px;
  font-size: 16px;
  padding: 0px 10px 0px 20px;
  border-radius: 10px;
  outline: none;
  border: solid gray 2px;
}

.buttstart {
  padding: 15px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 300px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #4BB6CD;
  width: 35%;
  font-size: 16px;
  height: 50%;
}

.boximage {
  max-width: 500px;
  height: 385px;
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.drag-area {
  height: 300px;
  border: 3px dashed #e0eafc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px auto;
}
.drag-area .icon {
  font-size: 10px;
  color: #1683ff;
}
.drag-area .header {
  font-size: 20px;
  font-weight: 500;
  color: #34495e;
}
.drag-area .support {
  font-size: 12px;
  color: gray;
  margin: 10px 0 15px 0;
}
.drag-area .button {
  font-size: 20px;
  font-weight: 500;
  color: #1683ff;
  cursor: pointer;
}
.drag-area.active {
  border: 2px solid #1683ff;
}
.drag-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.barr2 {
  display: flex;
  margin-top: 1rem;
  height: 60px;
  width: 900px;
  border: solid gray 2px;
  border-radius: 10px;
  outline: none;
  text-align: center;
}
.bbn{
  width: 380px;
  height: 35px;
  margin-top: 10px;
  margin-right: 20px;
  padding-top: 1%;
  font-size: 25px;
}
.bbd{
  width: 200px;
  height: 35px;
  margin-top: 10px;
  margin-right: 20px;
  padding-top: 1%;
  font-size: 25px;
}
.bbt{
  width: 200px;
  height: 35px;
  margin-top: 10px;
  margin-right: 30px;
  padding-top: 1%;
  font-size: 25px;
}
.bbu {
  margin-top: 6.5px;
  margin-right: 20px;
}

.n_img{
  width: 200px;
  height: 35px;
}

.img_detect{
  width: 900px;
  height: 350px;
  display: flex
}

.img_one{
  width: 450px;
  height: 350px;
}

.img_two{
  width: 450px;
  height: 350px;
}

.info_detect{
  width: 900px;
  display: flex
}

.info_detect1{
  width: 450px;
}

.info_detect2{
  width: 450px;
}
</style>
