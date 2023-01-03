<template>
  <div class="dashboard" style="margin-top:80px">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              MAIN MENU
              <hr>
              <ul class="list-group">
                <router-link :to="{name: 'dashboard'}" class="list-group-item text-dark text-decoration-none">DASHBOARD</router-link>
                <li @click="logout" class="list-group-item text-dark text-decoration-none" style="cursor:pointer">LOGOUT</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              DASHBOARD
              <hr>
              Selamat Datang <strong>{{ user.name }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",

  data() {
    return {
      loggedIn: localStorage.getItem('loggedIn'),
      token: localStorage.getItem('token'),
      user: []
    }
  },

  created() {
    axios.get('http://localhost:8000/api/user', { headers: { 'Authorization': 'Bearer ' + this.token } })
        .then(response => {
          console.log(response)
          this.user = response.data
        })
  },

  methods: {
    logout(){
      axios.get('http://localhost:8000/api/logout')
          .then(() => {
            localStorage.removeItem("loggedIn")

            return this.$router.push({ name: 'login' })
          })
    }
  },

  mounted() {
    if(!this.loggedIn){
      return this.$router.push({ name: 'login'})
    }
  }
}
</script>

<style scoped>

</style>