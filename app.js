// Require MongoDB language driver
const { MongoClient } = require("mongodb");
require("dotenv").config();

// Sample queries placed in a separate file
const {
  sampleAccount,
  sampleAccounts,
  documentToFind,
  documentsToFind,
  documentToUpdate,
  update,
  documentsToUpdate,
  update2,
  documentToDelete,
  documentsToDelete,
} = require("./utils/queries");

// Instantiate a new MongoClient
const uri = process.env.FULL_CONNECTION_STRING;
const client = new MongoClient(uri);

const dbname = "bank";
const collection_name = "accounts";

const accountsCollection = client.db(dbname).collection(collection_name);

// Connect to the database
const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Connected to the ${dbname} database 🌍`);
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  }
};

// Insert a single document
const insertOneDocument = async (document) => {
  try {
    let result = await accountsCollection.insertOne(document);
    console.log(`Inserted document: ${result.insertedId}`);
  } catch (err) {
    console.error(`Error inserting document: ${err}`);
  }
};

// Insert multiple documents into the collection
const insertManyDocuments = async (documents) => {
  try {
    let result = await accountsCollection.insertMany(documents);
    console.log(`Inserted ${result.insertedCount} documents`);
    console.log(result);
  } catch (err) {
    console.error(`Error inserting documents: ${err}`);
  }
};

// Find one document in the collection
const findOneDocument = async (query) => {
  try {
    let result = await accountsCollection.findOne(query);
    console.log(`Found one document`);
    console.log(result);
  } catch (err) {
    console.error(`Error finding one document: ${err}`);
  }
};

// Find all documents that match a query
const findDocuments = async (query) => {
  try {
    let result = await accountsCollection.find(query);
    console.log(`Found ${result.length} documents`);
    console.log(result);
  } catch (err) {
    console.error(`Error finding documents: ${err}`);
  }
};

// Update one document in the collection
const updateOneDocument = async (query, update) => {
  try {
    let result = await accountsCollection.updateOne(query, update);
    result.modifiedCount === 1
      ? console.log("Updated one document")
      : console.log("No documents updated");
  } catch (err) {
    console.error(`Error updating one document: ${err}`);
  }
};

// Update multiple documents in the collection
const updateManyDocuments = async (query, update) => {
  try {
    let result = await accountsCollection.updateMany(query, update);
    result.modifiedCount > 0
      ? console.log(`Updated ${result.modifiedCount} documents`)
      : console.log("No documents updated");
  } catch (err) {
    console.error(`Error updating many documents: ${err}`);
  }
};

// Delete one document in the collection
const deleteOneDocument = async (query) => {
  try {
    let result = await accountsCollection.deleteOne(query);
    result.deletedCount === 1
      ? console.log("Deleted one document")
      : console.log("No documents deleted");
  } catch (err) {
    console.error(`Error deleting one document: ${err}`);
  }
};

// Delete multiple documents in the collection
const deleteManyDocuments = async (query) => {
  try {
    let result = await accountsCollection.deleteMany(query);
    result.deletedCount > 0
      ? console.log(`Deleted ${result.deletedCount} documents`)
      : console.log("No documents deleted");
  } catch (err) {
    console.error(`Error deleting many documents: ${err}`);
  }
};

// Main function to run all the CRUD operations
const main = async () => {
  try {
    await connectToDatabase();
    await insertOneDocument(sampleAccount);
    // await insertOneDocument(generateAccount())
    // await insertManyDocuments(sampleAccounts)
    // await insertManyDocuments(generateAccount(10))
    // await findOneDocument(documentToFind)
    // await findDocuments(documentsToFind)
    // await updateOneDocument(documentToUpdate, update)
    // await updateManyDocuments(documentsToUpdate, update2)
    // await deleteOneDocument(documentToDelete)
    // await deleteManyDocuments(documentsToDelete)
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  } finally {
    await client.close();
  }
};

// Run the main function
main();
