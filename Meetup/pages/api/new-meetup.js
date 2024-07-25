import { MongoClient } from "mongodb";
export async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        const client = MongoClient.connect('mongodb+srv://urmipatel30201:Chiks@12@cluster0.8ypst55.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = meetupsCollection.insertOne(data)
        client.close();
        res.status(201).json({message: 'meetup inserted!!'})
    }
}