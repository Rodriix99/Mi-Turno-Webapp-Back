import mongoose from 'mongoose';
import Admin, { IAdmin }  from '../models/Admin';
import './adminData.json'

// const data = [
//   {
//     model: 'Admin',
//     documents: adminData
//   }
// ];

// const seedAdmin = async () => {
//   try {
//     // Conecta a la base de datos
//     mongoose.connect('mongodb://localhost:27017/mi-turno-webapp', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       family: 4
//     });

//     // Borra todos los documentos existentes en la colección "admins"
//     await Admin.deleteMany({});

//     // Inserta los datos de admin en la base de datos
//     await Admin.insertMany(adminData);

//     console.log('Datos de admin insertados correctamente');
//   } catch (error) {
//     console.log(`Error al insertar datos de admin: ${error}`);
//   } finally {
//     // Desconecta de la base de datos al finalizar
//     mongoose.disconnect();
//   }
// };

//  seedAdmin();

