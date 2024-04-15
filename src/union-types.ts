//--------------
// union types
//--------------

let someId: number | string;

someId = 1;
someId = '22';

let email: string | null = null;
email = 'mario@net.dev';


type Id = number | string;
let anotherId: Id;

anotherId = 'dsfsdfdf15sd1f5d';
anotherId = 1;

// when we pass union type to a function, we can only use methods applicable to both types
function swapIdType(id: Id): Id {
    // parseInt(id) 
    return id;
}
swapIdType('5');


//-------------
// type guards
//-------------

function swapIdType2(id: Id): Id {
    if (typeof id === 'string') {
        return parseInt(id);
    } else {
        return id.toString();
    }
}

const id1 = swapIdType2(1); // '1'
const id2 = swapIdType2('22'); // 22
console.log(id1, id2);


//-------------------
// tagged interfaces
//-------------------

interface SiteUser {
    type: 'user',
    username: string,
    email: string,
    id: Id;
}
interface Person {
    type: 'person';
    firstName: string,
    age: number,
    id: Id;
}

function logDetails(value: SiteUser | Person): void {
    if (value.type === 'user') {
        console.log(`User ${value.username} has email ${value.email}`);
    } else {
        console.log(`${value.firstName} id ${value.age} years old`);
    }
}
