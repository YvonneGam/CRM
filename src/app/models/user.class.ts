export class User {
/*     toJSON(): any {
      throw new Error('Method not implemented.');
    } */
    gender: boolean;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    img: string;

    constructor(obj?: any) {
        this.gender = obj ? obj.gender : '';
        this.firstName = obj ? obj.firstName : ''; //wenn obj existiert kommt obj.firstName rein, ansonsten leer (if else in schnell)
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.img = obj ? obj.img : '';
    }

    public toJSON() {
        return{
            gender: this.gender,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.firstName,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            img: this.img
        }
    }
}