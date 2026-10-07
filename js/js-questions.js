// Group objects by a property. 

const user1 = [
    { name: "A", department: "IT" },
    { name: "B", department: "HR" },
    { name: "C", department: "IT" }
  ]

const groups = Object.groupBy(user1, (user) => user.department);
console.log(groups);

// using reduce method

const grouped = user1.reduce((acc, user) => {
    acc[user.department] = acc[user.department] || [];
    acc[user.department].push(user);
    return acc;
},{});

console.log(grouped);

// To group by multiple properties

const people = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 30 },
    { name: "Eve", age: 28 }
  ];
  
  const grouped1 = Object.groupBy(people, (person) => person.age);
  // Output: { "28": [{ name: "Alice", age: 28 }, { name: "Eve", age: 28 }], "30": [{ name: "Bob", age: 30 }] }   

const grouped3 = people.reduce((acc, person) => {
    const key = JSON.stringify([person.age, person.name]); // or `${person.age}-${person.name}`
    acc[key] = acc[key] || [];
    acc[key].push(person);
    return acc;
  }, {});   

  console.log(grouped3);

  // For grouping by nested properties,

  const cars = [
    { brand: 'Audi', details: { color: 'black' } },
    { brand: 'Audi', details: { color: 'white' } }
  ];
  
  // Using a helper to extract nested value
  const grouped4 = cars.reduce((acc, car) => {
    const color = car.details.color;
    acc[color] = acc[color] || [];
    acc[color].push(car);
    return acc;
  }, {});   

  console.log(grouped4);

  // To group and sum values within each group

  const items = [
    { shape: 'square', color: 'red', count: 1 },
    { shape: 'square', color: 'red', count: 2 },
    { shape: 'circle', color: 'blue', count: 0 }
  ];
  
  const grouped5 = Object.values(items.reduce((acc, item) => {
    const key = `${item.shape}-${item.color}`;
    if (!acc[key]) {
      acc[key] = { shape: item.shape, color: item.color, total: 0 };
    }
    acc[key].total += item.count;
    return acc;
  }, {}));

  console.log(grouped5);
