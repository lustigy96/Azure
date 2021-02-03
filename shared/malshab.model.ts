import * as mongoose from 'mongoose';
import MalshabInterface from './malshab.interface';

const malshbSchema = new mongoose.Schema({
  taz: String,
  firstName: String,
  lastName: String,
  personalNumber: String,
  gender: String,
  birthDate: Date,
  profile: Number,
  kaba: Number,
  dapar: Number,
  pdfQuestionnaire: String,
  recordings: [String],
  grades: {},
});

const MalshabModel = mongoose.model<MalshabInterface & mongoose.Document>('Malshabs', malshbSchema);
export default MalshabModel;
