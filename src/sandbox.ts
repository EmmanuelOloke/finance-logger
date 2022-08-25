type StringORNum = string | number;
type ObjWithName = {name: string, uid: StringORNum};

const logDetails = (uid: StringORNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: ObjWithName) => {
    console.log(`${user.name} says Hello`);
}