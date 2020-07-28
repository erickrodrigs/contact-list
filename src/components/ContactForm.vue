<template>
  <v-form v-on:submit.prevent="addContact" style="width: 500px">
    <v-text-field v-model="name" prepend-inner-icon="mdi-account pb-1 mr-1" outlined placeholder="Name"></v-text-field>
    <v-text-field v-model="age" prepend-inner-icon="mdi-calendar pb-1 mr-1" outlined placeholder="Age"></v-text-field>
    <v-text-field v-model="email" prepend-inner-icon="mdi-email pb-1 mr-1" outlined placeholder="Email" type="email"></v-text-field>
    <v-text-field v-model="phone" prepend-inner-icon="mdi-phone pb-1 mr-1" outlined placeholder="Phone"></v-text-field>
    <v-btn type="submit" block x-large depressed color="success">Register</v-btn>
  </v-form>
</template>

<script>
export default {
  data: function() {
    return {
      name: '',
      age: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    addContact: function() {
      console.log('Hello, world!');
    }
  }
}
</script>

<style>

</style>