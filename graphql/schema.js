const { gql } = require('apollo-server');

const typeDefs = gql`
  type Verb {
    dictionary_form: String!
    type: String!

    masu_stem: String
    te_form: String
    te_nakute_form: String
    te_naide_form: String

    polite_present_form: String
    polite_present_negative_form: String
    polite_past_form: String
    polite_past_negative_form: String

    short_present_form: String
    short_present_negative_form: String
    short_past_form: String
    short_past_negative_form: String

    tai_present_form: String
    tai_present_negative_form: String
    tai_past_form: String
    tai_past_negative_form: String

    potential_short_present_form: String
    potential_short_present_negative_form: String
    potential_short_past_form: String
    potential_short_past_negative_form: String
    potential_polite_present_form: String
    potential_polite_present_negative_form: String
    potential_polite_past_form: String
    potential_polite_past_negative_form: String

    conditional_ba_form: String
    conditional_ba_negative_form: String
    conditional_tara_form: String
    conditional_tara_negative_form: String

    volitional_form: String
    polite_volitional_form: String

    polite_imperative_form: String
    casual_imperative_form: String

    command_form: String
    command_negative_form: String

    passive_short_present_form: String
    passive_short_present_negative_form: String
    passive_short_past_form: String
    passive_short_past_negative_form: String
    passive_polite_present_form: String
    passive_polite_present_negative_form: String
    passive_polite_past_form: String
    passive_polite_past_negative_form: String

    causative_short_present_form: String
    causative_short_present_negative_form: String
    causative_short_past_form: String
    causative_short_past_negative_form: String
    causative_polite_present_form: String
    causative_polite_present_negative_form: String
    causative_polite_past_form: String
    causative_polite_past_negative_form: String

    causative_passive_short_present_form: String
    causative_passive_short_present_negative_form: String
    causative_passive_short_past_form: String
    causative_passive_short_past_negative_form: String
    causative_passive_polite_present_form: String
    causative_passive_polite_present_negative_form: String
    causative_passive_polite_past_form: String
    causative_passive_polite_past_negative_form: String
  }

  type VerbResult {
    dictionary_form: String
    queried_form: String
    type: String
  }

  type MutationResult {
    verb: Verb
    success: Boolean
  }

  type Query {
    search (query: String!): VerbResult
    randomList (size: Int): [ Verb ]
    conjugate (verb: String!, type: String): Verb
  }

  type Mutation {
    create (dictionary_form: String, type: String): MutationResult
    update (target: String, dictionary_form: String, type: String): MutationResult
    delete (target: String): Boolean
  }
`;


module.exports = { typeDefs };