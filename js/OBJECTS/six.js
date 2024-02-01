let product={
    pid:'p101',
    pname:"Iphone 18",
    price:18000,
    color:['Grey','Yellow','green']
}
//print key:values
for(key in product){
    console.log(key,":",product[key])
}
//print product color -green
console.log(product.color[5])