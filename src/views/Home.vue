<template>
  <v-app >
    <div class="d-flex flex-wrap justify-center mx-auto my-auto">
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
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

export default {
  name: 'Home',
  components: {
    ContactForm,
    ContactList
  },
  data: () => ({
    //
  })
};
</script>
