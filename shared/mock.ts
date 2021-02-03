import * as mongoose from 'mongoose';
import MalshabModel from './malshab.model';
import MalshabInterface from './malshab.interface';
import config from '../config'

async function mock() {
  const malshabsData : MalshabInterface[] = [
    {
      taz: '111222333',
      firstName: 'Ali',
      lastName: 'Baba',
      personalNumber: '1232234',
      gender: 'F',
      birthDate: new Date(),
      profile: 54,
      kaba: 54,
      dapar: 54,
      pdfQuestionnaire: 'blaaa',
      recordings: ['blaa'],
      grades: { e1: 0, e2: 3 },
    },
    {
      taz: '444555666',
      firstName: 'Hercules',
      lastName: 'Hagadol',
      personalNumber: '1232234',
      gender: 'F',
      birthDate: new Date(),
      profile: 54,
      kaba: 54,
      dapar: 54,
      pdfQuestionnaire: 'blaaa',
      recordings: ['blaa'],
      grades: { e1: 0, e2: 3 },
    },
  ];
  console.log( config.db.COSMOSDB_HOST);
  // console.log( process.env);
  await mongoose.connect("mongodb://"+ config.db.COSMOSDB_HOST+":"+config.db.COSMOSDB_PORT+"/"+config.db.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb&retryWrites=false", {
    user: config.db.COSMOSDB_USER,
    pass: config.db.COSMOSDB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => console.log('Connected!'))
.catch((err) => console.log(err));

MalshabModel.create(malshabsData, (err) => {
  err ? console.log(err) : console.log('upload_data');
});
}

mock();





