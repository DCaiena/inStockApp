const config ={
//    server: 'https://pokeapi.co/api/v2/', 
    server:'https://api-mercado-django.herokuapp.com/',
    colors:{
        branco:'#fff',
        preto:'#000',
        vermelho:'#DD0000',
        cinza:'#EAEAEA'
    },
    requisicao:{
        post: (url, data ) =>{
            return new Promise( async(resolve, reject) => {
                try {
                    console.log(url, data,"00000000000000000")
                   let resp = await  fetch( config.server +url,{
                        method:'POST',
                        body: JSON.stringify(data),
                        headers:{
                            Accept:'application/json',
                            'Content-type':'application/json'
                        }
                    })
                    resolve(resp)
                } catch (error) {
                    reject(error)
                }
            })
        },
        get: (url ) => {
            return new Promise ( async(resolve, reject) =>{
                try {
                    let resp = await fetch( config.server+ url ,{
                        method:'GET',
                        headers:{
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        }
                    })
                    resolve(await resp.json())
                } catch (error) {
                    reject(error)
                }
            })
        },
        put:(url, data) =>{
            return new Promise (async(resolve, reject) =>{
                try {
                    let resp = await fetch(config.server+url,{
                        method:'PUT',
                        body:  JSON.stringify(data),
                        headers:{
                            Accept:'application/json',
                            'Content-type':'application/json'
                        }
                    })
                    resolve(resp)
                } catch (error) {
                    reject(error)
                }
            })
        },
        delete: (url, data ) =>{
            return new Promise( async(resolve, reject) => {
                try {
                   let resp = await  fetch(config.server+url,{
                        method:'DELETE',
                        body: JSON.stringify(data),
                        headers:{
                            Accept:'application/json',
                            'Content-type':'application/json'
                        }
                    })
                    resolve(resp)
                } catch (error) {
                    reject(error)
                }
            })
        },
    }

}

export default config