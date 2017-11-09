var app = getApp();
var list=[],lit,listadd,dat,that,id,url1,url2;
Page({
  onLoad:function(options){
    that = this;
    id = options.id;
    url = 'http://119.29.253.254:8000/api/index';
    queryRequest(url);
  },
  lowerLfunction(e){
    url1 = url+"&nt"+date.nt;
    getmoreRequest(url1);
  }
})
function queryRequest(url){
  wx.request({
    url: url,
    data:{},
    method:'GET',
    header:{
      'content-type':'application/json'
    },
    success:function(res){
      data=res.data.date;
      list=res.data.data.list;
      for(var i = 0;i<list.length;++i){
        list[i].type = list[i].user.type;
        list[i].last_modefied = list[i].user.last_modefied;
        list[i].ddl = list[i].user.ddl;
        list[i].num = list[i].user.num;
        list[i].cred_at = list[i].user.cred_at;
        list[i].status = list[i].user.status;
        list[i].publisher_id = list[i].user.publisher_id;
        list[i].comp_name = list[i].user.comp_name;
      }
      that.setData({
        list:list
      })
    }
  })
}
function getmoreRequest(url){
  wx.request({
    url: url,
    data:{},
    method:'GET',
    header:{
      'content-type':'application/json'
    },
    success:function(res){
      listadd=res.data.data.list;
      data=res.data.data;
      for(var i = 0;i<listadd.length;++i){
        listadd[i].type = listadd[i].user.type;
        listadd[i].last_modefied = listadd[i].user.last_modefied;
        listadd[i].ddl = listadd[i].user.ddl;
        listadd[i].num = listadd[i].user.num;
        listadd[i].cred_at = listadd[i].user.cred_at;
        listadd[i].status = listadd[i].user.status;
        listadd[i].publisher_id = listadd[i].user.publisher_id;
        listadd[i].comp_name = listadd[i].user.comp_name;
      }
      list = list.concat(listadd);
      that.setData({list:list})
    }
  })
}