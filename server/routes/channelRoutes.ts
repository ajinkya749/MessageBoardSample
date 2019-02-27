import express from 'express';

const channelRoutes = express.Router(); 

const emptyArray:string[] =[];
const data = {
    Channnels:['Channel1','Channel2','Channel3'],
    messages:[
        {
            id:"Channel1",
            messages:["messsage1"]
        },
        {
            id:"Channel2",
            messages:["message2"]
        },
        {
            id:"Channel3",
            messages:["message3"]
        }
    ]
}


channelRoutes.get('/channels',(req:any,res:any)=>{
   return res.json(data.Channnels);
});

channelRoutes.get('/messages/:id',(req:any,res:any)=>{
    const channelId = req.params.id;
    return res.json(
        data.messages.filter((item)=>{
            if(item.id===channelId)
                return item.messages
        })
    );
    
});

channelRoutes.put('/updateChannel/:id',(req:any,res:any)=>{
    const channelId = req.params.id;
    const message = req.body.message;
    console.log(message);
    data.messages.forEach(item => {
        if(item.id===channelId){
            console.log(item.id===channelId);
            item.messages.push(message)
        };
    });
    return res.json({
        "data":data,
        "Message":"Message Inserted Successfully"
    });
    
});

export default channelRoutes;
