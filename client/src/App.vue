<script>

import gql from 'graphql-tag'

export default {
  name: 'LayoutDefault',
  apollo: {
    getAllSettings: gql`query {
      getAllSettings {
        id,
        label,
        isChecked,
        isDisabled
      }
    }`,
  },
  data () {
    return {
      getAllSettings: [],
    }
  },
  methods: {
    handleChange(e) {
      e.preventDefault();
      let array = [...this.getAllSettings];
      let idx = array.findIndex(el => el.id === e.target.value);
      array[idx] = {...array[idx], isChecked: !array[idx].isChecked}
      this.getAllSettings = array;
    },
    handleSave() {
      console.log(this.getAllSettings)
    }
  },
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container style="height: 100vh">
      <div style="justify-content: center; flex-direction: column; display: flex; align-items: center; height: 100%">
        <h5 style="margin-bottom: 1rem">Email Notification</h5>
        <div style="display: flex; align-items: center" v-for="setting in getAllSettings" :key="setting.id">
          <input @input="(e) => handleChange(e)" type="checkbox" :disabled="setting.isDisabled" :id="setting.id" :value="setting.id"
                 v-model="setting.isChecked" />
          <label style="margin-left: 15px; font-size: 18px" :for="setting.id">{{setting.label}}</label>
        </div>
        <div class="q-pa-md q-gutter-sm">
          <q-btn @click="handleSave" color="primary" label="Save Changes" />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>
