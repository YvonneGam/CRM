export class User {
/*     toJSON(): any {
      throw new Error('Method not implemented.');
    } */
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : ''; //wenn obj existiert kommt obj.firstName rein, ansonsten leer (if else in schnell)
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() {
        return{
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.firstName,
            street: this.street,
            zipCode: this. zipCode,
            city: this.city
        }
    }
}