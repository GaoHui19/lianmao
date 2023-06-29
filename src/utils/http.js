//axios二次封装
import axios from 'axios';
import { showDialog } from 'vant';

const instance=axios.create({
    baseURL:'https://lianmall.usemock.com',
    timeout:1000,
    // headers:{
    //     'Content-Type':'application/json','application/x-www-form-urlencoded'
    //  }
    method:'POST'
})
instance.interceptors.request.use(function(config){
    config.headers={
        'X-Auth-Token':sessionStorage.getItem('token')
    }
    return config;
},function(error){
    showDialog({message:error.message})
})
instance.interceptors.response.use(function(res){
    // if(res.status===200){
    //     if(res.data.code===20001){
    //         return res.data
    //     }else{
    //         showDialog({message:res.data.message})
    //     }
    // }else{
    //     showDialog({message:'请求出错'})
    // }
    return res.data
    },function(error){
        showDialog({message:error.message})
    })
    export default instance;
