<template>
  <div 
    class="d-flex"
    style="border: 1px solid gray; height: 396px; width: 600px; overflow-y:auto">
    <p v-if="contacts.length === 0" class="mx-auto my-auto">No contacts yet...</p>
    <v-list
      v-if="contacts.length !== 0"
      width="100%"
      three-line>
      <template
        v-for="contact in contacts">
        <v-list-item v-bind:key="contact.email">
          <v-list-item-avatar>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ contact.name }}, {{ contact.age }} years old</v-list-item-title>
            <v-list-item-subtitle>Email: {{ contact.email }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon style="cursor: pointer" v-on:click="removeContact(contact)">
            <v-icon>mdi-delete</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-divider v-bind:key="contact.phone"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['removeContact'])
  },
  computed: {
    ...mapGetters({
      contacts: 'getContacts'
    })
  }
}
</script>

<style>

</style>