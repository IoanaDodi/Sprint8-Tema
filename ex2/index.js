function removeProperty(obj, property) {

    const newObj = {...obj};

    delete newObj[property];

    return newObj;
}

const obj = {a:1, b:2};
const property = "b";
const objModified = removeProperty(obj, property);

console.log("Obiectul original", obj);
console.log("Obiectul modificat:", objModified);
