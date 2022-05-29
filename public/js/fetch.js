async function fetchPost(url,data,options = null){
    var Bases = {
        body: data,
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
        },
        method:"post"
    }
    try{
        options  =  options||{noParam:0}
        if (!url) throw 'not url';
        if (!data) {
            data = '' 
        }
        let bases  = Bases
        Object.assign(bases,basesParam);
        var result;
        await fetch(url,bases).then(
            (response)=>{
            //    return  response.text()
                // return response.json()
                result = response.text()
            }
        )
        return result;
    }catch(err){
        return err
    }

}