import { db } from "../../lib/db";

const handler = async (req, res) => {
  const {nama, username, email, password, keterangan} = req.body;
  try {
    if (!nama || !username || !email || !password || !keterangan) {
      return res.status(400).json({ message: "Anda belum mengisi form" });
    }
    const result = await db.query(
      `UPDATE user SET nama = ?, username = ?, email = ?, password = ?, keterangan = ? WHERE nama = ?`,
      [nama, username, email, password, keterangan, nama]
    );
    return res.json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export default handler