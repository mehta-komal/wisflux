enum Gender{
    Male = "Male",
    Female = 'Female',
    Other='Other'
}

interface User{
    name: string;
    age: number;
    email: string;
    gender: Gender;
}
export {User, Gender};