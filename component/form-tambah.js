import { useState } from "react";
const form = () => {
  const [nama, setNama] = useState("");
  const [klub, setKlub] = useState("");
  const [jumlahgol, setGol] = useState("");
  const [foto, setFoto] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [file, setFile] = useState("")

  const onSelectImage = (e)=>{
      if (!e.target.files || e.target.files.length === 0){
        setSelectedFile(undefined);
        return 
      }
      const _file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = function(){
        setFile(_file);
        setFoto(reader.result);
      }
      reader.readAsDataURL(_file)
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/tambah", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          klub,
          jumlahgol,
          foto
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Data berhasil ditambahkan");
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <>
      <div id="content">
        <div className="container-fluid">
          <h3 className="text-dark mb-4">Tambah Data</h3>
          <div className="card shadow">
            <div
              className="card-header py-3"
              style={{ background: "var(--bs-gray-dark)" }}
            >
              <p className="text-white m-0 fw-bold">Tambah Data</p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <form onSubmit={submitHandler}>
                    <label className="form-label">Masukan Foto</label>
                    <input 
                      className="form-control" 
                      id="foto"
                      type="file"
                      onChange={onSelectImage}
                      />
                    <label className="form-label">Nama Pemain</label>
                    <input
                      className="form-control"
                      id='nama'
                      type="text"
                      placeholder="Masukan Nama Pemain"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                    <label className="form-label">Nama Klub</label>
                    <input
                      className="form-control"
                      id='klub'
                      type="text"
                      placeholder="Masukan Nama Klub"
                      value={klub}
                      onChange={(e)=> setKlub(e.target.value)}
                    />
                    <label className="form-label">Jumlah Gol</label>
                    <input
                      className="form-control"
                      id='jumlahgol'
                      type="number"
                      placeholder="Masukan Jumlah Gol"
                      value={jumlahgol}
                      onChange={(e)=>setGol(e.target.value)}
                    />
                    <hr />
                    <button className="btn btn-success" type="submit">
                      Tambah Data
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default form;
