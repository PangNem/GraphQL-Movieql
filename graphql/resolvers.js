const gugu = {
    name: "Gugu",
    age: 19,
    gender: "male"
}

const resolvers = {
    Query: {
        preson: () => gugu
    }
};

export default resolvers;