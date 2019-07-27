const headers = {"content-type":"application/json;charset=UTF-8"};
const url = "https://simpleexpressapi.azurewebsites.net";

const postHeader = new Headers({
    'Accept':'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
});
postHeader.append('Access-Control-Allow-Origin', url);
postHeader.append('Access-Control-Allow-Credentials', 'true');

async function getData(url,newHeaders=headers, payload={}, method='GET'){
    const body = {
        headers:{
            'Content-Type': 'application/json'
        },
        method:method,
        ...(method!=="GET" && {body:JSON.stringify(payload)})
    }
      return await new Promise((resolve,reject)=>{
        fetch(url,{...body})
        .then(data=>{
            if(!data.ok){
                return null;
            }
            return data.json();
        })
        .then(data=>resolve(data))
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
            return null;
        });
      }).then(data=>data)      
}

export function submitForm(payload){
    return getData(`${url}/update`,postHeader,payload,'POST')
            .then(result=>{
                return {[payload.key]:result};
            })
}

export function getCustomerService(payload={}){
    return getData(`${url}/get`+(payload.id&&'?id='+payload.id||'')).then(result=>{
        return {[payload.key]:result};
    });
}

export function createNewUserService(payload={}){
    return getData(`${url}/insert`,'',payload,'POST')
            .then(result=>{ return {[payload.key]:result}});
}

export function deleteSelectedUserService(payload){
    return getData(`${url}/delete`,'',payload,'DELETE')
            .then(result=>{ return {[payload.key]:result}});
}
