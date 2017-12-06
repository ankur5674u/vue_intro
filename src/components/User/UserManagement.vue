<template>
  <div>
    <div class="col-sm-10">
        <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#myModal" v-on:click="openUserModal">Add User Detail</button>
        <br>
    </div>
    <div>
        <table class="table table-bordered">
            <thead>
              <th style="white-space: nowrap; text-align: left;"><a href="javascript:void(0)">User Name</a></th>
              <th style="white-space: nowrap; text-align: left;"><a href="javascript:void(0)">First Name</a></th>
              <th style="white-space: nowrap; text-align: left;"><a href="javascript:void(0)">Last Name</a></th>
              <th style="white-space: nowrap; text-align: left;"><a href="javascript:void(0)">Email</a></th>
              <th style="white-space: nowrap; text-align: left;"><a href="javascript:void(0)">Phone</a></th>
              <th style="white-space: nowrap; text-align: left;"><a href="javascript:void(0)">Role</a></th>
            </thead>
            <tbody>
              <tr v-for="user in users">

                <td style="white-space: nowrap; text-align: left;">{{user.username}}</td>
                <td style="white-space: nowrap; text-align: left;">{{user.first_name}}</td>
                <td style="white-space: nowrap; text-align: left;">{{user.last_name}}</td>
                <td style="white-space: nowrap; text-align: left;">{{user.email}}</td>
                <td style="white-space: nowrap; text-align: left;">{{user.phone}}</td>
                <td style="white-space: nowrap; text-align: left;">{{user.role}}</td>
              </tr>
            </tbody>
          </table>
     </div>
    <div v-show="hideUserMdel" id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Add User</h4>
                </div> 
                      
                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label">Username</label>
                            <input class="form-control" v-model="newuser.username" name="newuser.username"/>
                        </div>
                        <div class="form-group">
                            <label class="control-label">First Name</label>
                            <input class="form-control" type="text" name="newuser.first_name" v-model="newuser.first_name"/>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Last Name</label>
                            <input class="form-control" type="text" name="newuser.last_name" v-model="newuser.last_name"/>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Email</label>
                            <input type="email" class="form-control" name="newuser.email" v-model="newuser.email"/>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Phone</label>
                            <input type="text" class="form-control" name="newuser.email" v-model="newuser.phone"/>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Role</label>
                            <select class="form-control" name="newuser.role" v-model="newuser.role">
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Password</label>
                            <input class="form-control" type="password" name="newuser.password" v-model="newuser.password"/>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Confirm Password</label>
                            <input class="form-control" type="password" name="newuser.confirmPassword" v-model="newuser.confirmPassword"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary" v-on:click="addUser">Add User</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                
            </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'userManagement',
  data () {
    return {
      newuser: {},
      hideUserMdel: false,
      users: [
        {
          username: 'ankur5674u',
          first_name: 'Ankur',
          last_name: 'Singh',
          email: 'ankur5674u@gmail.com',
          phone: '9999237805',
          role: 'Admin',
          password: 'Ankur@5675'
        },
        {
          username: 'anamika5674u',
          first_name: 'Anamika',
          last_name: 'Chaudhari',
          email: 'anamika5674u@gmail.com',
          phone: '9999237806',
          role: 'Admin',
          password: 'Anamika@5675'
        }
      ]
    }
  },
  methods: {
    addUser: function (e) {
      this.users.push({
        username: this.newuser.username,
        first_name: this.newuser.first_name,
        last_name: this.newuser.last_name,
        email: this.newuser.email,
        phone: this.newuser.phone,
        role: this.newuser.role,
        password: this.newuser.password
      })
      this.hideUserMdel = false
      this.newuser = {}
      console.log(this.newuser.username)
      e.preventDefault()
    },
    openUserModal: function () {
      this.hideUserMdel = true
    }
  }
}
</script>

