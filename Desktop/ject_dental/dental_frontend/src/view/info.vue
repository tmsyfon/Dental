<template>
  <div id="app">
    <Nav />
    <div class="m_box">
      <div class="lef">
        <div class="bar1">
          <form action="#">
            <input type="input" placeholder="Name..." v-model="userName"/>
          </form>
          <div class="bar2">
            <form action="#">
              <input type="date" v-model="selectedDate"/>
            </form>
            <form action="#">
              <input type="time" v-model="selectedTime"/>
            </form>
          </div>
        </div>
        <h5 class="f1">Upload your Before Images:</h5>
        <div class="drag-area">
          <input type="file" @change="onBeforeImageChange" multiple  ref="beforeInput" />
          <span class="support">Supports: JPEG, JPG, PNG</span>
        </div>
        <h5 class="f1">Upload your After Images:</h5>
        <div class="drag-area">
          <input type="file" @change="onAfterImageChange" multiple   ref="afterInput"/>
          <span class="support">Supports: JPEG, JPG, PNG</span>
        </div>
        <div>
          <button type="button" @click="startDetect" class="buttstart">
            START DETECT
          </button>
        </div>
      </div>
      <div class="right">
        <div class="overf">
          <button @click="exportToExcel">Export to Excel</button>
          <div style="margin-top: 20px; color:#4BB6CD">
            <h5>Name: {{ userName }}</h5> 
            <h5>Date: {{ selectedDate }}</h5>
            <h5>Time: {{ selectedTime }}</h5>
          </div>
          <div class="comparison">
            <div class="before_container">
              <h5>Before Detection</h5>
              <div class="img_detect">
                <div v-for="(img, index) in beforeImages" :key="index">
                  <img :src="img" alt="Before Image" style="width: 400px; height: 400px; margin-bottom: 20px; margin-top: 20px;" />
                  <h6>{{ beforeFileNames[index] }}</h6>
                  <div v-if="beforeResults[index] && Object.keys(beforeResults[index]).length" class="result_container">
                    <h5>Before Detection Results</h5>
                    <table>
                      <tr>
                        <th>No.</th>
                        <th>Instrument</th>
                        <th>Amount</th>
                      </tr>
                      <tr v-for="(value, key, idx) in beforeResults[index].result" :key="key">
                        <td>{{ idx + 1 }}</td>
                        <td>{{ key }}</td>
                        <td>{{ value }}</td>
                      </tr>
                      <tr>
                        <td colspan="2"><strong>Total</strong></td>
                        <td><strong>{{ beforeResults[index].total }}</strong></td> <!-- แสดง total ที่ได้รับจาก backend -->
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="after_container">
              <h5>After Detection</h5>
              <div class="img_detect">
                <div v-for="(img, index) in afterImages" :key="index">
                  <img :src="img" alt="After Image" style="width: 400px; height: 400px; margin-bottom: 20px; margin-top: 20px;" />
                  <h6>{{ afterFileNames[index] }}</h6>
                  <div v-if="afterResults[index] && Object.keys(afterResults[index]).length" class="result_container">
                    <h5>After Detection Results</h5>
                    <table>
                      <tr>
                        <th>No.</th>
                        <th>Instrument</th>
                        <th>Amount</th>
                      </tr>
                      <tr v-for="(value, key, idx) in afterResults[index].result" :key="key">
                        <td>{{ idx + 1 }}</td>
                        <td>{{ key }}</td>
                        <td>{{ value }}</td>
                      </tr>
                      <tr>
                        <td colspan="2"><strong>Total</strong></td>
                        <td><strong>{{ afterResults[index].total }}</strong></td> <!-- แสดง total ที่ได้รับจาก backend -->
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
  </div>
</template>

<script>
import Nav from "../components/nav.vue";
import * as XLSX from 'xlsx';
import ExcelJS from 'exceljs';

export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      beforeImages: [],
      afterImages: [],
      beforeResults: [],
      afterResults: [],
      beforeFileNames: [],
      afterFileNames: [],
      userName :'',
       selectedDate:'',
       selectedTime:''

    };
  },
  methods: {
    async onBeforeImageChange(event) {
      this.beforeImages.splice(0, this.beforeImages.length); 
      this.beforeResults.splice(0, this.beforeResults.length);
      this.beforeFileNames.splice(0, this.beforeFileNames.length);

      let files = Array.from(event.target.files);

      console.log("Before sorting:", files.map(file => file.name));
      files.sort((a, b) => a.name.localeCompare(b.name)); // Sort files by name
      console.log("After sorting:", files.map(file => file.name));

      for (let i = 0; i < files.length; i++) {
        const imageDataUrl = await this.readFileAsDataURL(files[i]);
        this.beforeImages.push(imageDataUrl);
        this.beforeFileNames.push(files[i].name); 
        this.beforeResults.push({}); 
      }
    },
    async onAfterImageChange(event) {
      this.afterImages.splice(0, this.afterImages.length); 
      this.afterResults.splice(0, this.afterResults.length);
      this.afterFileNames.splice(0, this.afterFileNames.length);

      let files = Array.from(event.target.files);

      files.sort((a, b) => a.name.localeCompare(b.name)); 

      const imagePromises = files.map(file => this.readFileAsDataURL(file));
      
      try {
      const imageUrls = await Promise.all(imagePromises);
      this.afterImages = imageUrls; 
      this.afterFileNames = files.map(file => file.name);
      this.afterResults = imageUrls.map(() => ({}));
    } catch (error) {
      console.error("Error loading after images", error);
    }
    },
    readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
  },
    async startDetect() {
      const beforeFormData = new FormData();
      const afterFormData = new FormData();

      // Upload all Before images
      const beforeFiles = this.$refs.beforeInput.files; 
      const afterFiles = this.$refs.afterInput.files;

      for (const file of beforeFiles) {
        beforeFormData.append("file", file);
      }

      for (const file of afterFiles) {
        afterFormData.append("file", file);
      }

      try {
        const beforeResponse = await fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          body: beforeFormData,
        });

        if (!beforeResponse.ok) {
          throw new Error("Before detection failed");
        }

        this.beforeResults = await beforeResponse.json(); // Get results as array
        const afterResponse = await fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          body: afterFormData,
        });

        if (!afterResponse.ok) {
          throw new Error("After detection failed");
        }

        this.afterResults = await afterResponse.json();
        console.log("afterResults Results:", this.afterResults);  // Get results as array
      } catch (error) {
        console.error("Detection failed", error);
      }
    },    exportToExcel() {
  if (!this.beforeResults.length && !this.afterResults.length) {
    alert("ไม่มีข้อมูลสำหรับส่งออก");
    return;
  }

  const wb = XLSX.utils.book_new();

  // ตรวจสอบว่า beforeResults มีข้อมูลและ result.result เป็น array
  if (this.beforeResults.length > 0 ) {
    const beforeSheetData = [
      ["User Name", this.userName],
      ["Selected Date", this.selectedDate],
      ["Selected Time", this.selectedTime],
      [],
      ["No.", "Instrument", "Amount"],
      ...this.beforeResults.flatMap((result, index) => {
        const instruments = Object.entries(result.result || {}).map(([instrument, amount]) => [
          index + 1, instrument, amount
        ]);
        return instruments;
      })
    ];
    const beforeSheet = XLSX.utils.aoa_to_sheet(beforeSheetData);
    XLSX.utils.book_append_sheet(wb, beforeSheet, 'Before Detection');
  } else {
    console.warn("Before results ไม่มีข้อมูลหรือไม่ถูกต้อง");
  }

  // ตรวจสอบว่า afterResults มีข้อมูลและ result.result เป็น array
  if (this.afterResults.length > 0 ) {
    const afterSheetData = [
      ["User Name", this.userName],
      ["Selected Date", this.selectedDate],
      ["Selected Time", this.selectedTime],
      [],
      ["No.", "Instrument", "Amount"],
      ...this.afterResults.flatMap((result, index) => {
        const instruments = Object.entries(result.result || {}).map(([instrument, amount]) => [
          index + 1, instrument, amount
        ]);
        return instruments;
      })
    ];
    const afterSheet = XLSX.utils.aoa_to_sheet(afterSheetData);
    XLSX.utils.book_append_sheet(wb, afterSheet, 'After Detection');
  } else {
    console.warn("After results ไม่มีข้อมูลหรือไม่ถูกต้อง");
  }

  if (wb.SheetNames.length > 0) {
    XLSX.writeFile(wb, 'detection_results.xlsx');
  } else {
    alert("ไม่มีข้อมูลสำหรับส่งออก");
  }
}
  }
};
</script>

<style>
.m_box {
  display: flex;
}
.lef {
  margin-right: 4%;
}
.right {
  margin-top: 5rem;
  width: 62rem;
  height: 36rem;
  padding: 0px 10px 0px 20px;
  border-radius: 10px;
  outline: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.overf {
  overflow-y: scroll;
  height: 85%;
}
.bar1 {
  margin-top: 6rem;
}
.bar2 {
  display: flex;
}
.drag-area {
  margin-top: 1rem;
  width: 450px;
  height: 100px;
  border-radius: 10px;
  padding: 0px 10px 0px 20px;
  border: 2px dashed gray;
  outline: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.f1 {
  color: gray;
  margin-top: 10px;
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
  width: 450px;
  height: 50px;
  border-radius: 10px;
  background-color: #4BB6CD;
  font-size: 18px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.comparison {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.before_container, .after_container {
  width: 45%;
  margin: 0 10px;
}
.result_container {
  margin-top: 10px;
}
.img_detect {
  margin-bottom: 50px; /* เพิ่มช่องว่างระหว่างภาพและผลลัพธ์ */
}
.info_detect {
  margin-top: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
</style>
