export class User {
    constructor(
        public _id: string,
        public name: string,
        public email: string,
        public pass: string,
        public tipo: string
    ) {}
}