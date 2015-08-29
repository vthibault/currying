// 74 characters
let add=(...p)=>(f=>(f.toString=b=>eval(p.join('+')),f))(add.bind(p,...p))

// 70 characters (cheating using global variable "$", working on jsbin.com and babeljs.io/repl/)
// let add=(...p)=>(($=add.bind(p,...p)).toString=b=>eval(p.join('+')),$)

function test(a, b) {
  if (a == b) {
    console.log('OK');
  } else {
    console.log(a + ' != ' + b);
  }
}

test(add(1, 2), 3);
test(add(3)(4)(), 7);
test(add(3)(4)(5), 12);

var three = add(3);
var four = add(4);
test(three, 3);
test(four, 4);
test(three(5), 8);
test(three(6), 9);
test(three(four), 7);
test(three(four)(three(four)), 14);
