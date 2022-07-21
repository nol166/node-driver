// import objectid for mongodb
const { ObjectId } = require("mongodb")

const sampleAccount = {
  account_holder: "Linus Torvalds",
  account_id: "MDB829001337",
  account_type: "checking",
  balance: 50352434,
}

const sampleAccounts = [
  {
    account_id: "MDB011235813",
    account_holder: "Ada Lovelace",
    account_type: "checking",
    balance: 60218,
  },
  {
    account_id: "MDB829000001",
    account_holder: "Muhammad ibn Musa al-Khwarizmi",
    account_type: "savings",
    balance: 267914296,
  },
]

const documentToFind = { _id: ObjectId("62a3638521a9ad028fdf77a3") }

const documentsToFind = { balance: { $gt: 10000 } }

const documentToUpdate = { _id: ObjectId("62a3638521a9ad028fdf779e") }
const update = { $inc: { balance: 100 } }

const documentsToUpdate = { type: "checking" }
const update2 = { $push: { transfers_complete: "TR413308000" } }

const documentToDelete = { _id: ObjectId("62a3638521a9ad028fdf77a1") }
const documentsToDelete = { balance: { $lt: 0 } }

module.exports = {
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
}
