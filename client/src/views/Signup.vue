<template>
  <div class="signup">
    <div class="block">
      <div class="box">
        <p class="title is-1">Signup</p>
        <p class="subtitle is-3">and begin tracking!</p>
        <form>
          <div class="field column is-4 is-offset-one-third">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input class="input" type="name" placeholder="e.g alex smith" />
              <span class="icon is-small is-left">
                <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>

          <div class="field column is-4 is-offset-one-third">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field column is-4 is-offset-one-third">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Enter password here" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>

          <div class="field column is-4 is-offset-one-third">
            <label class="label">Confirm Password</label>
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Confirm password here" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
