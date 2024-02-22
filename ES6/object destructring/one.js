let state={

    product:{
             pid:"p101",
             pname:" iphone18",
             price:120000,
    },
    status:true,
    count:100,


}
// console.log(state.product)

//by using desrturctring


let { product,status}=state;
console.log(product);
console.log(status);