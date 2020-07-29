import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
  },
  getters: {
    getContacts: state => state.contacts
  },
  mutations: {
    addContact: (state, contact) => {
      state.contacts.push(contact);
    }
  }
});

export default store;
