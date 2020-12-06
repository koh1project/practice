const { ApolloServer } = require('apollo-server');

const typeDefs = `
  type Query {
    totalPhotos: Int!
  }
    type Mutation {
      postPhoto(name: String! description: String): boolean!
    }
`;

let photos = [];

const resolvers = {
  Query: {
    // 必ずスキーマと同じ名前のリゾルバ関数を定義する必要がある
    totalPhotos: () => photos.length
  },

  Mutation: {
    postPhoto(parent, args) {
      photos.push(args)
      return true
    }
  }
};

// サーバーのインスタンスを作成
// その際typeDefs(スキーマ)とリゾルバを引数に取る
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Webサーバー起動
server.listen()
  .then(({ url }) => console.log(`GraphQL Service running on ${url}`));


// https://www.graphqlbin.com/v2/6RQ6TM