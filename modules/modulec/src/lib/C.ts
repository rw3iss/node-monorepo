import B, { btest } from '@monorepo/moduleb';

export default class C {

    public test() {
        console.log(`B:`, B);
        console.log(`c test, calling B...`);
        const b = new B();
        b.test();
        btest();
    }

}