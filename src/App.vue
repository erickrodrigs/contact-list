<template>
  <v-app >
    <div class="d-flex flex-wrap justify-center mx-auto my-auto" style="width: 1200px; max-height: 396px;">
      <aside class="mr-6" style="width: 500px">
        <ContactForm />
      </aside>
      <v-main style="width: 600px;">
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
  }),
};
</script>
