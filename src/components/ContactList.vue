<template>
  <v-list 
    three-line 
    style="border: 1px solid gray; height: 396px; width: 600px; overflow-y:auto">
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
        <v-list-item-icon>
          <v-icon>mdi-delete</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider v-bind:key="contact.phone"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: 'Carlos',
          age: 24,
          email: 'carlos@ime.usp.br',
          phone: '(11) 94569-2087'
        },
        {
          name: 'Edna',
          age: 49,
          email: 'edna@ime.usp.br',
          phone: '(11) 11111-1111'
        },
        {
          name: 'Rogério',
          age: 33,
          email: 'rogerio@ime.usp.br',
          phone: '(11) 22222-2222'
        },
        {
          name: 'Marcos',
          age: 31,
          email: 'marcos@ime.usp.br',
          phone: '(11) 33333-3333'
        }
      ]
    }
  }
}
</script>

<style>

</style>