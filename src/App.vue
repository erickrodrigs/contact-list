<template>
  <v-app>
    <div class="d-flex justify-center flex-wrap mx-auto my-auto" style="width: 80%;">
      <aside class="mr-6" style="">
        <ContactForm />
      </aside>
      <v-main width="300px" style="background-color: #303030">
      
      
      </v-main>
    </div>
  </v-app>
</template>

<script>
import ContactForm from './components/ContactForm';

export default {
  name: 'App',
  components: {
    ContactForm
  },
  data: () => ({
    //
  }),
};
</script>
