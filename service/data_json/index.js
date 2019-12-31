const fs=require('fs')
fs.readFile('./goods.json','utf8',function(err,data){
    let newData=JSON.parse(data);
    let pushData=[];
    let i=0;
    newData.RECORDS.map((val,index)=>{
        if(val.IMAGE1){
            i++;
            pushData.push(val)
        }
    })
    fs.writeFile('./newGoods.json',JSON.stringify(pushData),function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log('写文件成功');
        }
    })
})