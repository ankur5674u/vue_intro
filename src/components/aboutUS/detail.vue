<template>
  <div>
    <input type="text" v-model="title"><br>
    <h1 style="color:red">{{title}}</h1>
    <button v-on:click="greet">Hello</button>
    <button v-on:click="print_message('Hello Anamika')">Hello World</button><br>
    <input type="text" v-on:keyup="press_key" v-on:keyup.enter="hit_enter">
    <!-- Form Detail -->
    <hr>
    <label class="control-label">First Name:</label>
    <input type="text" class="control-label" v-model="user.firstName" placeholder="First Name"><br>
    <label class="control-label">Last Name:</label>
    <input class="control-label" type="text" v-model="user.lastName" placeholder="Last Name"><br>
            <h1>{{fullName}}</h1>
            <h2>{{msg}}</h2>
    <hr>
    <p>First Name: {{user.firstName}}</p>
    <p>Last Name: {{user.lastName}}</p>
    <p v-text="user.firstName"></p>
    <!-- For parsing html -->
    <span v-html="fullName1"></span>
    <!-- for conditional display -->
    <p v-if="showName">Show Name: {{user.firstName}} {{user.lastName}}</p>
    <p v-else>Not Display</p>
    <p v-if="hideName">Show Name: {{user.firstName}} {{user.lastName}}</p>
    <p v-else>Hide Name</p>
    <table class="table table-bordered">
        <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
        </thead>
        <tbody>
            <tr v-for="friend in friendsData">
                <td>{{friend.name}}</td>
                <td>{{friend.email}}</td>
                <td>{{friend.phone}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'detail',
  props: {
    msg: {
      type: String,
      default: 'Foot Bar'
    }
  },
  data () {
    return {
      title: 'About US',
      fullName1: '<h1>Ankur Prakash Singh</h1>',
      user: {
        firstName: 'Ankur',
        lastName: 'Prakash'
      },
      showName: true,
      hideName: false,
      friendsData: [
          {name: 'Ankur Prakash Singh', email: 'ankur5674u@gmail.com', phone: '9999237805'},
          {name: 'Ankita Prakash', email: 'ankita5674u@gmail.com', phone: '9999237804'}
      ]
    }
  },
  methods: {
    greet: function () {
      alert('Hello Ankur Prakash Singh')
    },
    print_message: function (message) {
      alert(message)
    },
    press_key: function (e) {
      // console.log('pressed')
      console.log(e.target.value)
    },
    hit_enter: function () {
      console.log('You hit enter')
    }
  },
  computed: {
    fullName: function () {
      return this.user.firstName + ' ' + this.user.lastName
    }
  }
}
</script>
