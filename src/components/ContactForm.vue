<template>
  <v-form>
    <v-text-field prepend-inner-icon="mdi-account pb-1 mr-1" outlined placeholder="Name"></v-text-field>
    <v-text-field prepend-inner-icon="mdi-calendar pb-1 mr-1" outlined placeholder="Age"></v-text-field>
    <v-text-field prepend-inner-icon="mdi-email pb-1 mr-1" outlined placeholder="Email" type="email"></v-text-field>
    <v-text-field prepend-inner-icon="mdi-phone pb-1 mr-1" outlined placeholder="Phone"></v-text-field>
    <v-btn block x-large depressed color="success">Register</v-btn>
  </v-form>
</template>

<script>
export default {

}
</script>

<style>

</style>