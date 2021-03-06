module.exports = {
        typeDefs: /* GraphQL */ `type AggregateContact {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Contact {
  id: ID!
  fullname: String!
  phone: String
  email: String!
  subject: String!
  message: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type ContactConnection {
  pageInfo: PageInfo!
  edges: [ContactEdge]!
  aggregate: AggregateContact!
}

input ContactCreateInput {
  fullname: String!
  phone: String
  email: String!
  subject: String!
  message: String!
}

type ContactEdge {
  node: Contact!
  cursor: String!
}

enum ContactOrderByInput {
  id_ASC
  id_DESC
  fullname_ASC
  fullname_DESC
  phone_ASC
  phone_DESC
  email_ASC
  email_DESC
  subject_ASC
  subject_DESC
  message_ASC
  message_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ContactPreviousValues {
  id: ID!
  fullname: String!
  phone: String
  email: String!
  subject: String!
  message: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type ContactSubscriptionPayload {
  mutation: MutationType!
  node: Contact
  updatedFields: [String!]
  previousValues: ContactPreviousValues
}

input ContactSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContactWhereInput
  AND: [ContactSubscriptionWhereInput!]
  OR: [ContactSubscriptionWhereInput!]
  NOT: [ContactSubscriptionWhereInput!]
}

input ContactUpdateInput {
  fullname: String
  phone: String
  email: String
  subject: String
  message: String
}

input ContactUpdateManyMutationInput {
  fullname: String
  phone: String
  email: String
  subject: String
  message: String
}

input ContactWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fullname: String
  fullname_not: String
  fullname_in: [String!]
  fullname_not_in: [String!]
  fullname_lt: String
  fullname_lte: String
  fullname_gt: String
  fullname_gte: String
  fullname_contains: String
  fullname_not_contains: String
  fullname_starts_with: String
  fullname_not_starts_with: String
  fullname_ends_with: String
  fullname_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  subject: String
  subject_not: String
  subject_in: [String!]
  subject_not_in: [String!]
  subject_lt: String
  subject_lte: String
  subject_gt: String
  subject_gte: String
  subject_contains: String
  subject_not_contains: String
  subject_starts_with: String
  subject_not_starts_with: String
  subject_ends_with: String
  subject_not_ends_with: String
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ContactWhereInput!]
  OR: [ContactWhereInput!]
  NOT: [ContactWhereInput!]
}

input ContactWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createContact(data: ContactCreateInput!): Contact!
  updateContact(data: ContactUpdateInput!, where: ContactWhereUniqueInput!): Contact
  updateManyContacts(data: ContactUpdateManyMutationInput!, where: ContactWhereInput): BatchPayload!
  upsertContact(where: ContactWhereUniqueInput!, create: ContactCreateInput!, update: ContactUpdateInput!): Contact!
  deleteContact(where: ContactWhereUniqueInput!): Contact
  deleteManyContacts(where: ContactWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  contact(where: ContactWhereUniqueInput!): Contact
  contacts(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contact]!
  contactsConnection(where: ContactWhereInput, orderBy: ContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactConnection!
  node(id: ID!): Node
}

type Subscription {
  contact(where: ContactSubscriptionWhereInput): ContactSubscriptionPayload
}
`
      }
    