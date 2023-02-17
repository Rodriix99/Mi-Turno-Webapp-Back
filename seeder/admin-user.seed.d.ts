import  Seeder  from 'mongoose-seed';
import Admin from '../models/Admin';

export const seeder: Seeder = {
    async seed(): Promise<any> {
        await Admin.create({
            fullName: 'adminUser',
            dni: 12345678,
            email: 'admin@admin.com',
            password: 'IsAdmin@1234',
            usertype: 'admin'
        })
    }
}