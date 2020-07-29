<template>
  <v-form v-on:submit.prevent="contactInfoValidation" style="width: 500px">
    <v-text-field 
      v-model="contact.name" 
      :error="nameInput.error"
      :error-messages="nameInput.errorMessage"
      prepend-inner-icon="mdi-account pb-1 mr-1"
      outlined 
      placeholder="Name">
    </v-text-field>
    <v-text-field 
      v-model="contact.age"
      :error="ageInput.error"
      :error-messages="ageInput.errorMessage"
      prepend-inner-icon="mdi-calendar pb-1 mr-1" 
      outlined 
      min="0"
      placeholder="Age">
    </v-text-field>
    <v-text-field 
      v-model="contact.email"
      :error="emailInput.error"
      :error-messages="emailInput.errorMessage"
      prepend-inner-icon="mdi-email pb-1 mr-1" 
      outlined 
      placeholder="Email" 
      type="email">
    </v-text-field>
    <v-text-field 
      v-model="contact.phone"
      :error="phoneInput.error"
      :error-messages="phoneInput.errorMessage"
      prepend-inner-icon="mdi-phone pb-1 mr-1" 
      outlined 
      placeholder="Phone">
    </v-text-field>
    <v-btn 
      type="submit" 
      block 
      x-large 
      depressed 
      color="success">
      Register
    </v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: function() {
    return {
      contact: {
        name: '',
        age: '',
        email: '',
        phone: ''
      },
      nameInput: {
        error: false,
        errorMessage: ''
      },
      ageInput: {
        error: false,
        errorMessage: ''
      },
      emailInput: {
        error: false,
        errorMessage: ''
      },
      phoneInput: {
        error: false,
        errorMessage: ''
      }
    }
  },
  methods: {
    contactInfoValidation() {
      let isValid = true;

      if (this.contact.name.trim() === '') {
        this.nameInput.error = true;
        this.nameInput.errorMessage = 'Name must be not empty';
        isValid = false;
      }

      if (!this.contact.age.match(/^[0-9]+$/)) {
        this.ageInput.error = true;
        this.ageInput.errorMessage = 'Age must contain only numbers';
        isValid = false;
      }

      if (!this.contact.email.match(/\S+@\S+\.\S+/)) {
        this.emailInput.error = true;
        this.emailInput.errorMessage = 'Email format invalid. It must contain @ character';
        isValid = false;
      }

      if (!this.contact.phone.match(/^[0-9]{9}$/)) {
        this.phoneInput.error = true;
        this.phoneInput.errorMessage = 'Phone must contain 9 digits';
        isValid = false;
      }

      if (isValid)
        this.addContact();
    },
    addContact() {
      if (this.contacts.filter(elem => elem.phone === this.contact.phone).length !== 0) {
        alert('Contact with this phone already exists.');
        return;
      }

      this.$store.dispatch('addContact', this.contact);
    }
  },
  watch: {
    'contact.name'(value) {
      if (this.nameInput.error === true && value.trim() !== '') {
        this.nameInput.error = false;
        this.nameInput.errorMessage = '';
      }
    },
    'contact.age'(value) {
      if (this.ageInput.error === true && value.match(/^[0-9]+$/)) {
        this.ageInput.error = false;
        this.ageInput.errorMessage = '';
      }
    },
    'contact.email'(value) {
      if (this.emailInput.error === true && value.match(/\S+@\S+\.\S+/)) {
        this.emailInput.error = false;
        this.emailInput.errorMessage = '';
      }
    },
    'contact.phone'(value) {
      if (this.phoneInput.error === true && value.match(/^[0-9]{9}$/)) {
        this.phoneInput.error = false;
        this.phoneInput.errorMessage = '';
      }
    }
  },
  computed: {
    ...mapGetters({
      contacts: 'getContacts'
    })
  }
}

</script>
