import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import * as mongoose from 'mongoose';
import MalshabModel from '../shared/malshab.model';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('GET MALSHABS: HTTP trigger function processed a request.');
  await mongoose.connect("mongodb://"+ process.env.COSMOSDB_HOST+":"+process.env.COSMOSDB_PORT+"/"+process.env.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb&retryWrites=false", {
    user: process.env.COSMOSDB_USER,
    pass: process.env.COSMOSDB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => context.log('Connected!'))
  .catch((err) => context.log(err));
  const malshabs = await MalshabModel.find({ });
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: malshabs,
  };
};

export default httpTrigger;
