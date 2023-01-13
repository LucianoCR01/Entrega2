const ProducManager = require("./ProductManager")
const manager = new ProducManager("products.json")

const main = async () =>{

    let produc1 = {
        title : "Manzana",
        descripction : "Roja", 
        price : 200,
        thumbnail : "asdasdasd",
        code : 123,
        stock : 200
    }

    let produc2 = {
        title : "Peras",
        descripction : "Verde", 
        price : 800,
        thumbnail : "asdaasdasdasd",
        code : 145,
        stock : 78
    }

    let produc3 = {
        title : "Uva",
        descripction : "Violeta", 
        price : 65,
        thumbnail : "asdasdasdzxc",
        code : 36,
        stock : 89
    }

    let actualizar = {
        title : "Sandia",
        descripction : "Verde y Roja", 
        price : 65,
        thumbnail : "ac",
        code : 36,
        stock : 89
    }

    await manager.addProduct(produc1)
    await manager.addProduct(produc2)
    await manager.addProduct(produc3)
    console.log(await manager.getProducts())
    console.log(await manager.getProdctById(2))
    await manager.updateProduct(2,actualizar)
    await manager.deleteProduct(3)
}

main()