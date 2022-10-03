<template>
  <form @submit.prevent="handleSubmit">
    <label for="">Email:</label>
    <input type="email" v-model="email" required>

    <label for="">Password:</label>
    <input type="password" v-model="password" required>
    <div v-if="passwordError" class="error"> {{ passwordError }}</div>

    <label for="">Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="termSkill" @keyup.ctrl="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill" @click="deleteSkill(skill)">
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Create an account</button>
    </div>
  </form>
</template>


<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'designer',
      terms: false,
      termSkill: '',
      skills: [],
      passwordError: ''
    }
  },
  methods: {
    addSkill(e) {
      if(e.key === ',' && this.termSkill) {
        if(!this.skills.includes(this.termSkill)) {
          this.skills.push(this.termSkill)
        }
        this.termSkill = ''
      }
    },
    deleteSkill(value) {
      if(this.skills.includes(value)) {
        this.skills = this.skills.filter((item) => {
          return item !== value
        })
      }
    },
    handleSubmit() {
      this.passwordError= this.password.length > 5 ? '': 'Password must be at least 6 chars long'
      if(!this.passwordError) {
        console.log('email: ', this.email)
        console.log('password: ', this.password)
        console.log('role: ', this.role)
        console.log('skills: ', this.skills)
        console.log('terms: ', this.terms)
      }
    }
  }
}
</script>

<style>
form {
 max-width: 420px;
 margin: 30px auto;
 background-color: white;
 text-align: left;
 padding: 40px;
 border-radius: 10px;
}

label {
 color: #aaa;
 display: inline-block;
 font-size: 0.6em;
 text-transform: uppercase;
 letter-spacing: 1px;
 font-weight: bold;
 margin-top: 20px;
}

input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 10px; 
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background-color: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
}
</style>