const config ={
    server:'http://localhost:3000',
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
                   let resp = await  fetch(server+url,{
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
        get: (url, data ) => {
            return new Promise ( async(resolve, reject) =>{
                try {
                    let resp = await fetch(server+url,{
                        method:'GET',
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
        put:(url, data) =>{
            return new Promise (async(resolve, reject) =>{
                try {
                    let resp = await fetch(server+url,{
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
        deletet: (url, data ) =>{
            return new Promise( async(resolve, reject) => {
                try {
                   let resp = await  fetch(server+url,{
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