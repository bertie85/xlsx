const config = require('./config');
const { MongoClient } = require('mongodb');

/**
 * @namespace DB
 * @param {string} [database] The name of the db
 * @description Responsible for managing the connections to the DB.
 */
class DB {
  db = null;

  constructor(database) {
    // Create a new MongoClient
    const client = new MongoClient(config.mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.openConnection(client, database).catch(console.dir);
  }

  /**
   * @method openConnection
   * @memberof DB
   * @param {MongoClient} client - The client object
   * @param {string} database - The name of the db
   * @description Opens the connection to the given db
   */
  async openConnection(client, database) {
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      this.db = client.db(database);
      console.log("Connection to the db is ready");
    }
    catch (e) {
      // Ensures that the client will close on error
      console.log("Connection to the db could not be established", e);
      await client.close();
    }
  }

  /**
   * @method getTable
   * @memberof DB
   * @param {string} table - The name of the collection.
   * @returns {object} - The connection object to the given collection.
   */
  getTable(table) {
    return this.db.collection(table);
  }
}

module.exports = DB;
