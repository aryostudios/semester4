import { db } from "../../lib/db";

const handler = async(req, res)=>{
    const {nama, email, nomer, alamat, jadwal} = req.body;
    try{
        if(!nama || !email || !nomer || !alamat|| !jadwal){
            return res.status(400).json({message: 'Data ada yang kosong'})
        }
        const result = await db.query(`INSERT INTO terbayar (nama, email, nomer, alamat, jadwal) VALUES (?,?,?,?,?)`,[nama, email, nomer, alamat, jadwal])
        const resultDelete = await db.query(`DELETE FROM pemesan WHERE nama = ?`, nama)
        await db.end;
        return res.json(result, resultDelete)
    }catch (e){
        res.status(500).json({message: e.message});
    }

}
export default handler