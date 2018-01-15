const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const dboper = require('./operations');

const url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url, (err, db) => {

    assert.equal(err,null);

    console.log('Connected to server!');

    dboper.insertDocument(db, { name: "Vadonut", description: "yummy dish"}, "dishes", (result) => {
        console.log("Insert document: ", result.ops);

        dboper.findDocuments(db, "dishes", (docs) => {
            console.log("Found document: ", docs);

            dboper.updateDocument(db, { name: "Vadonut" }, { description: "Test update yummy"}, "dishes", (result) => {
                console.log("Updated document: ", result.result);
                dboper.findDocuments(db, "dishes", (docs) => {
                    console.log("Found updated documents: ", docs); 

                    db.dropCollection("dishes", (res) => {
                        console.log("Dropped collection: ", res);

                        db.close();
                    });
                });
            });
        });
    });

    const collection = db.collection("dishes");
    collection.insertOne({"name": "Uthappizza", "description": "test"},
    (err, result) => {
        assert.equal(err,null);

        console.log("After Insert:\n");
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);
            
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("dishes", (err, result) => {
                assert.equal(err,null);

                db.close();
            });
        });
    });

});