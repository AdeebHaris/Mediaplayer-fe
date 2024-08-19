import axios from "axios"
export const commonApi = async(httpMethod,url,requestBody)=>{
    let reqConfig ={
        method: httpMethod,  // http method used
        url:url,   // url of json server
        data:requestBody,  // data coming from form
        Headers:{
            'Content-Type':'application/json'
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result;
    }).catch((err)=>{
        console.log(err);
    })
}
