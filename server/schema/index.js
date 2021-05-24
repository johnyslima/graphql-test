const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const movies = [
    {id: '1', title: "Pulp", genre: 'Crime'},
    {id: '2', title: "1984", genre: 'Sci-Fi'},
    {id: '3', title: "V for Vendetta", genre: 'Sci-Fi-Thriller'},
    {id: '4', title: "Snatch", genre: 'Crime-comedy'}
]

const directors = [
	{ id: '1', name: 'Quentin Tarantino', age: 55 },
	{ id: '2', name: 'Michael Radford', age: 72 },
	{ id: '3', name: 'James McTeigue', age: 51 },
	{ id: '4', name: 'Guy Ritchie', age: 50 },
];


const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
      movie: {
        type: MovieType,
        args: {
          id: { type: GraphQLID },
        },
        resolve(parent, args) {
            return movies.find((movie) => movie.id == args.id)
        },
      },
    },
  });

module.exports = new GraphQLSchema({
    query: Query,
})