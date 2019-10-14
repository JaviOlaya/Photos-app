import {connect} from 'mongoose';

export async function startConnection(){
  await  connect('mongodb://localhost/Gallerydb-photos',{ 
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
console.log('La base de datos está conectada');

}