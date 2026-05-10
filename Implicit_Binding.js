let obj={
    a:1,
    b:'Hello',
    print:function(){
        console.log(this);
// This is actually 'execute Content
        this.c='new c added inside print';
    }
}
//Implicit Binding :obj.print()toh print ke andar this will point to obj
//Implicit this will on itself point to obj humne nhi bataya .khud figure kis JS ne
obj.print();
console.log(obj);