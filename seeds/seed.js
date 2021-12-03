const { createVerbObject } = require('../classes/AllVerbs');
const data = require('../data.js');

exports.seed = function(knex) {
  console.log("deleting verbs");
  return knex('verbs').del()
    .then(function () {
      console.log("verbs deleted");
      const verbsWithConjugations = data.map(({dictionary_form, type}) => {
        console.log("verbswithconjugations", dictionary_form, type);
        return createVerbObject({dictionary_form, type}).all;
      });
      return knex('verbs').insert(verbsWithConjugations);
    });
};
