
export async function costumerGet(req, res){

    try{
        res.sendStatus(200)
    }catch(error){
        return res.send(error.response).status(500)
    }

} 