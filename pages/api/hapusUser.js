import { db } from "../../lib/db";

const handler = async(req, res)=>{
    const { id_user } = req.query
    try{
        if(!id_user){
            return res.status(400).json({message: 'Tidak ada id nya'})
        }
        const result = await db.query(`DELETE FROM user WHERE id_user = ?`, id_user)
        return res.json(result)
    }catch (e){
        res.status(500).json({message: e.message});
    }

}
export default handler