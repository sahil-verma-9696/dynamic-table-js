import Users from "./src/data/users.js";

// problem it is override multiple then and catch
// solution : store then and catch handler in promise
function myPromise(callback) {
  const promise = {
    thenHandlers: [],
    status: "pending",
    data: null,
    resolve: (data) => {
      if (promise.status === "pending") {
        promise.status = "resolved";
        promise.data = data;
        if (typeof promise.thenHandler === "function") {
          // promise.thenHandler(data);

          promise.thenHandlers.forEach((handler) => {
            handler(data);
          });
        }
      }
    },
    reject: (message) => {
      if (promise.status === "pending") {
        promise.status = "rejected";
        if (typeof promise.catchHandler === "function")
          promise.catchHandler(message);
      }
    },
    myThen: (handler) => {
      promise.thenHandlers.push(handler);
      promise.thenHandler = handler;
      console.log("thenHandler ", promise.thenHandlers);
      return promise;
    },
    myCatch: (handler) => {
      promise.catchHandler = handler;
      return promise;
    },
  };

  callback(promise.resolve, promise.reject);

  return promise;
}

function fetchUsers() {
  return new myPromise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject("error");
      } else {
        resolve(Users);
      }
    }, 1000);
  });
}

fetchUsers()
  .myThen((data) => {
    console.log("resolved 1", data);
  })
  .myThen((data) => {
    console.log("resolved 2", data);
  })
  .myCatch((message) => {
    console.log("rejected ", message);
  });
