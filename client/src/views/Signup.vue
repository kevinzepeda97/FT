<template>
  <div class="signup">
    <div class="block">
      <div class="box">
        <p class="title is-1">Signup</p>
        <p class="subtitle is-3">and begin tracking!</p>
        <form v-on:submit.prevent="onSubmit">
          <div class="form-group field column is-4 is-offset-one-third">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input class="input" type="name" v-model="name" id="name"/>
              <span class="icon is-small is-left">
                <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>

          <div class="form-group field column is-4 is-offset-one-third">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" type="text" v-model="email" id="email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="form-group field column is-4 is-offset-one-third">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input class="input" type="text" v-model="password" id="password"/>
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>

          <div class="form-group field column is-4 is-offset-one-third">
            <label class="label">Confirm Password</label>
            <div class="control has-icons-left">
              <input class="input" type="text"  v-model="conPassword" id="conPassword" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>

          <div class="form-group">
            <input type="submit" value="Sign Up" class="button is-primary">
      </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      conPassword: '',
    };
  },
  methods: {
    onSubmit() {
      if (!this.name || !this.email || !this.password || !this.conPassword) {
        this.$toasted.show('Please fill in all the fields', {
          duration: 3000,
          icon: 'exclamation-circle',
        });
      } else if (this.password
      !== this.conPassword) {
        this.$toasted.show('Password and Confirmed password do not match', {
          duration: 3000,
          icon: 'exclamation-circle',
        });
      } else {
        this.$router.push(`/profile/${this.name}`);
      }
    },
  },
};
</script>
