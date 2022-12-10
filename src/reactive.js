const data = {
  a: 1,
  b: {
    c: {
      d: 2,
    },
  },
  e: [1, 2, 3],
  f: [
    {
      g: "a",
      h: {
        i: "b",
      },
    },
  ],
};

function observe(data) {
  if (!data || typeof data !== "object") {
    return;
  }
  new Observer(data);
}

class Observer {
  constructor(value) {
    this.value = value;
    this.walk();
  }

  walk() {
    Object.keys(this.value).forEach((key) => defineReactive(this.value, key));
  }
}

function defineReactive(data, key, value = data[key]) {
  const dep = new Dep();
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return value;
    },
    set(newValue) {
      if (newValue === value) {
        return;
      }
      value = newValue;
      observe(newValue);
      console.log("gogo", dep);
      dep.notify();
    },
  });
}

class Dep {
  constructor() {
    this.subs = [];
  }

  depend() {
    if (Dep.target) {
      this.addSub(Dep.target);
    }
  }

  notify() {
    const subs = [...this.subs];
    subs.forEach((s) => s.update());
  }

  addSub(sub) {
    this.subs.push(sub);
  }
}

Dep.target = null;

const targetStack = [];

function pushTarget(_target) {
  targetStack.push(Dep.target);
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

class Watcher {
  constructor(data, expression, cb) {
    this.data = data;
    this.expression = expression;
    this.cb = cb;
    this.value = this.get();
  }

  get() {
    pushTarget(this);
    const value = parsePath(this.data, this.expression);
    popTarget();
    return value;
  }

  update() {
    const oldValue = this.value;
    this.value = parsePath(this.data, this.expression);
    this.cb.call(this.data, this.value, oldValue);
  }
}

// 'a.b.c'
// {
//   a: {
//     b: {
//       c: 1
//     }
//   }
// }
function parsePath(obj, expression) {
  const segments = expression.split(".");
  for (let key of segments) {
    if (!obj) return;
    obj = obj[key];
  }
  return obj;
}

observe(data);

data.a = 9;
export {};
