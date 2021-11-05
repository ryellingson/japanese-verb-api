const { createVerbObject } = require('../classes/AllVerbs');
const allForms = require('../helpers/all_forms');
const config = require("../knexfile.js");
const knex = require("knex")(config);

const VerbModel = {
  create: async ({ dictionary_form, type }) => {
    const verb = createVerbObject({dictionary_form, type});
    return knex("verbs").insert(verb.all)
      .then(() => {  
        return knex("verbs").where('dictionary_form', dictionary_form);
      }).then((response) => {
        return response[0];
      })
      .catch((error) => console.log(error.detail));
  },
  update: async({ target, dictionary_form, type}) => {
    const dictionary = dictionary_form || target;
    const verb = createVerbObject({dictionary_form: dictionary, type});
    return knex('verbs').where('dictionary_form', target).update(verb.all)
      .then(() => { 
        return knex("verbs").where('dictionary_form', dictionary);
      }).then((response) => {
        return response[0];
      })
      .catch((error) => console.log(error.detail));
  },
  delete: async ({dictionary_form}) => {
    return knex("verbs").where('dictionary_form', dictionary_form).del()
      .then((response) => { return response })
      .catch((error) => console.log(error.detail));
  },
  find: async ({ dictionary_form }) => {
    return knex("verbs").where('dictionary_form', dictionary_form)
      .then((response) => { return response[0] })
      .catch((error) => console.log(error.detail));
  },
  search: async ({ query }) => {
    const allColumns = `${allForms.map((column_name) => `${column_name} = '${query}'`).join(" OR ")}`;
    return knex.raw(`SELECT * FROM verbs WHERE ${allColumns};`)
      .then((response) => { return response.rows[0] })
      .catch((error) => console.log(error.detail));
  },
  all: async () => {
    // console.log("knex", knex('verbs'));
    return knex('verbs')
      .then((response) => { console.log(response) })
      .catch((error) => console.log(error.detail));
  }
}

module.exports = VerbModel;