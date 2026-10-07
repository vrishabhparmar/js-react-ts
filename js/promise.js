function mydata(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating a real fetch
            if (!url) {
                reject(new Error("URL is required"));
                return;
            }
            
            resolve({ name: "Rohit", age: 23 });
        }, 2000);
    });
}

mydata("/api/user")
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Error:", error));   

mydata()
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Error:", error));  


/**
 * Let's See Advanced Promise Methods and Patterns for Effective Async Handling
 */

///  Promise.all() Method

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed") // If task three is rejected then the entire operation is rejcted
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));


//  Promise.allSettled() Method
// Waits for all promises to settle (fulfilled or rejected) and returns results.

Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results));

// Promise.race() Method
// resolves or rejects as soon as the first promise settles.

Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
]).then((result) =>
    console.log(result))
.catch(err => console.error(err));

// Promise.any() Method
// resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.

Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


// Sequential Execution

    let tasks = [1, 2, 3];
tasks.reduce((prevPromise, current) => {
    return prevPromise.then(() => {
        return new Promise((resolve) => {
            console.log(`Processing task ${current}`);
            setTimeout(resolve, 500); // Simulate async task
        });
    });
}, Promise.resolve());

tasks.reduce(async (prevPromise, current) => {
    await prevPromise;
    return await new Promise((resolve) => {
        console.log(`Processing task ${current}`);
        setTimeout(resolve, 500); // Simulate async task
    });
}, Promise.resolve());

for (const current of tasks) {
    await new Promise(resolve => {
        console.log(`Processing task ${current}`);
        setTimeout(resolve, 500);
    });
}   