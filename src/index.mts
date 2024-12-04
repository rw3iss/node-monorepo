import A from '@monorepo/moduleapp';
import B from '@monorepo/moduleb';
import C from '@monorepo/modulec';

console.log("MONOREPO");

let a = new A();
let b = new B();
let c = new C();

a.test();
b.test();
c.test();