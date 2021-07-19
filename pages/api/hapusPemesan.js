import { db } from "../../lib/db";

const handler = async(req, res)=>{
    const { id_pemesan } = req.query
    try{
        if(!id_pemesan){
            return res.status(400).json({message: 'Tidak ada id nya'})
        }
        const result = await db.query(`DELETE FROM pemesan WHERE id_pemesan = ?`, id_pemesan)
        return res.json(result)
    }catch (e){
        res.status(500).json({message: e.message});
    }

}
export default handler