import LayoutAdmin from "../../component/admin/layoutAdmin";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [_nama, setNama] = useState("");
  const [_username, setUsername] = useState("");
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const [_keterangan, setKeterangan] = useState("");

  const router = useRouter();
  const { nama, username, email, password, keterangan } = router.query;

  useEffect(() => {
    if (typeof nama == "string") {
      setNama(nama);
    }
    if (typeof username == "string") {
      setUsername(username);
    }
    if (typeof email == "string") {
      setEmail(email);
    }
    if (typeof password == "string") {
      setPassword(password);
    }
    if (typeof keterangan == "string") {
      setKeterangan(keterangan);
    }
  }, [nama, username, email, password, keterangan]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/updateAkun", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: _nama,
          username: _username,
          email: _email,
          password: _password,
          keterangan: _keterangan
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Update data sukses");
      Router.push("/admin/akun");
    } catch (e) {
      throw Error(e.message);
    }
  };
  return (
    <>
      <LayoutAdmin>
      <div className="container-sm">
      <div className="row">
        <div className="col">
          <h1 style={{ fontFamily: "ABeeZee, sans-serif" }}>Ubah Akun</h1>
          <div className="row">
            <div className="col">
              <form onSubmit={submitHandler}>
                <label className="form-label">Nama</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Masukan Nama"
                  value={_nama}
                  onChange={(e) => setNama(e.target.value)}
                />
                <label className="form-label">Username</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Masukan Username"
                  value={_username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Masukan Email"
                  value={_email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Masukan Password"
                  value={_password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label">Keterangan</label>
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Masukan Email"
                  value={_keterangan}
                  onChange={(e) => setKeterangan(e.target.value)}
                />
                <hr />
                <button className="btn btn-warning" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
      </LayoutAdmin>
    </>
  );
}
