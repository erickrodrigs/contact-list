<template>
  <v-app >
    <div class="d-flex flex-wrap justify-center mx-auto my-auto" style="width: 1200px;">
      <aside class="mr-6">
        <ContactForm />
      </aside>
      <v-main>
        <ContactList />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export default {
  name: 'App',
  components: {
    ContactForm,
    ContactList
  },
  data: () => ({
    //
  })
};
</script>
