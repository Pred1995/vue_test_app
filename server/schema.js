const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type Settings {
        id: ID
        label: String
        isChecked: Boolean
        isDisabled: Boolean
    }
    
    type Query {
        getAllSettings: [Settings]
    }
`);

module.exports = schema;
