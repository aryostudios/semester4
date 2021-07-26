import { db } from "../../lib/db";

const handler = async(req, res)=>{
    const {namaPaket, nama, email, nomer, alamat, jadwal} = req.body;
    try{
        if(!namaPaket || !nama || !email || !nomer || !alamat|| !jadwal){
            return res.status(400).json({message: 'Input harus diisi semua'})
        }
        const result = await db.query(`INSERT INTO pemesan (paket, nama, email, nomer, alamat, jadwal) VALUES (?,?,?,?,?,?)`,[namaPaket, nama, email, nomer, alamat, jadwal])
        await db.end;
        return res.json(result)
    }catch (e){
        res.status(500).json({message: e.message});
    }

}
export default handler