const fetch = require ('node-fetch')
const fs = require ('fs')

async function fetchProducts () {
    try {
        const response = await fetch ('https://fakestoreapi.com/products')
        const data = await response.json()
        const jsonData = JSON.stringify(data)
        const filePath = './components/productdata.json'
        
        fs.writeFile (filePath, jsonData, 'utf8', (err)=> {
            if (err) {
                console.error ('error writing file', err)
            }else {
                console.log('json file save worked')
            }
        })
    } catch (error) {
        console.error('error fetching data', error)
    }
}

fetchProducts()