import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contacts: []
  },
  getters: {
    getContacts: state => state.contacts
  },
  mutations: {
    addContact: (state, contact) => state.contacts.push(contact),
    removeContact: (state, index) => state.contacts.splice(index, 1)
  },
  actions: {
    addContact: (context, contact) => context.commit('addContact', contact),
    removeContact: (context, contact) => {
      const index = context.state.contacts.findIndex(elem => elem.email === contact.email);
      context.commit('removeContact', index);
    }
  }
});

export default store;
