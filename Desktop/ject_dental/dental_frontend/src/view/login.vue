<template>
    <div id="app">
        <div class="fah">
            <div class="name_main">
                <div class="dd">
                    <h1 class="haed1">:D</h1>
                </div>
                <div>
                    <h2>ETECT</h2>
                    <h2>ENTAL</h2>
                </div>
            </div>

            <div class="main">
                <h3>LOGIN</h3>
                <form action="" class="form1">
                    <div class="b1">
                        <div class="img1">
                            <img src="../assets/image_1.png" alt="" width="31px">
                        </div>
                        <input type="text" id="first" name="first" placeholder="Enter your Username" required v-model="username"> 
                    </div>
                    <!-- v-model="username คือการประกาศให้ค่าที่เข้ามากจากการกรอกชื่อหรือรหัสเก็บไว้ในตัวแปร 'username' -->

                    <div class="b1">
                        <div class="img1">
                            <img src="../assets/image_30.png" alt="" width="35px">
                        </div>
                        <input type="password" id="password" name="password" placeholder="Enter your Password" required v-model="password">
                    </div>

                    <div class="wrap">
                        <button type="submit" @click="login()"> 
                            <!-- คำสั่งคลิ้ก ประกาศเพื่อทำฟังก์ชั่นข้างล่างต่อ -->
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            username: '',
            password:'',
            correct_name:'fah',
            correct_password:'1234'
        },
        {
            username: '',
            password:'',
            correct_name:'fon',
            correct_password:'5678'
        }
    },
    // คำสังแสดงฟั่งก์ชั่นในการทำงาน
    methods: {
        login(){
            if (this.username === this.correct_name && this.password === this.correct_password){
                window.location.href = 'http://localhost:5173/room';
                alert("succes")
            }
            else{
                window.location.reload
                alert("nom_correct")
            }
        }
    },
};
</script>

<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    line-height: 1.2;
    min-height: 100vh;
    background: #F5F5F5;
    flex-direction: column;
    margin: 0;
}

.fah {
    margin-left: -2%;
    margin-bottom: 10%;
}

.main {
    background-color: #AFE4F4;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    transition: transform 0.2s;
    width: 500px;
    text-align: center;
}

.form1 {
    margin-top: 20px;
}

.dd {
    margin-top: -10px;
}

.name_main {
    display: flex;
    margin-left: 27%;
    margin-bottom: -3rem;
}

h3 {
    color: #878989;
    margin-top: 15px;
}

h2 {
    color: #000000;
    margin-bottom: 0%;
}

h1 {
    color: #4BB6CD;
    margin-bottom: 3rem;
}

.haed1 {
    font-size: 5.7rem;
}

.b1 {
    display: flex;
}

.img1 {
    width: 12%;
    margin-bottom: 14px;
}

label {
    display: block;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: left;
    color: #555;
    font-weight: bold;
}


input {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: none;
    color: white;
    cursor: pointer;
    background-color: #000000;
    width: 25%;
    font-size: 18px;
}

.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>