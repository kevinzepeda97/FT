<template>
  <div class="settings columns">
    <div class="block column is-6 is-offset-3">
      <div class="box">
          <p class="title">Update Login Info</p>
          <div class="field column is-6 is-offset-3">
          <label class="label">Update Email</label>
          <div class="control has-icons-left">
            <input class="input" type="email" placeholder="" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field column is-6 is-offset-3">
          <label class="label">New Password</label>
          <div class="control has-icons-left">
            <input class="input" type="password" placeholder="" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>

        <div class="field column is-6 is-offset-3">
          <label class="label">Confirm New Password</label>
          <div class="control has-icons-left">
            <input class="input" type="password" placeholder="" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>
        <div class="field column is-6 is-offset-3">
        <router-link to="/settings" exact-active-class="active" class="button is-primary">
                <strong>Update Info</strong>
                </router-link>
                </div>
      </div>
      <div class="box">
        <article class="panel is-primary">
  <p class="panel-heading">
    Friends
  </p>
  <div class="panel-block">
    <p class=" control column is-6 is-offset-3">
      <v-select v-model="selected" :options="['Kevin', 'Alex',
      'Jessica', 'Rodney Dangerfield']"></v-select>
    </p>
  </div>
</article>
      </div>
    </div>
  </div>
</template>
