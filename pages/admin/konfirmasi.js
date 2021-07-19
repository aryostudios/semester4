import Link from "next/dist/client/link";
import Router from "next/router";
import { mutate } from "swr";
import LayoutAdmin from "../../component/admin/layoutAdmin";
import { usePemesan } from "../../lib/swr-fetch";
export default function Home() {
  const { data, error } = usePemesan();
  if (error) {
    return <div>Error Loading</div>;
  }
  if (!data) {
    return <div>Loading.....</div>;
  }
  // console.log(data);

  async function hapusPemesan(id_pemesan) {
    //setDeleting (true)
    let res = await fetch(`/api/hapusPemesan?id_pemesan=${id_pemesan}`, {
      method: "DELETE",
    });
    let json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate(`/api/hapusPemesan`);
    //setDeleting (false)
    alert("Data telah dihapus");
    Router.push("/admin/konfirmasi");
  }

  async function pindahData(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/pindahData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          email,
          nomer,
          alamat,
          jadwal,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Pesanan Terkonfirmasi");
      window.location.href = "/admin/konfirmasi";
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <>
      <LayoutAdmin>
        <div className="col" style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "ABeeZee, sans-serif" }}>KONFIRMASI</h1>
          <div className="row">
            <div className="col">
              <div className="table-responsive">
                <table className="table">
                  <thead
                    style={{
                      background: "var(--bs-dark)",
                      color: "var(--bs-light)",
                    }}
                  >
                    <tr>
                      <th>Nama</th>
                      <th>Paket</th>
                      <th>Email</th>
                      <th>Nomer</th>
                      <th>Alamat</th>
                      <th>Jadwal</th>
                      <th style={{ textAlign: "center" }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{ color: "var(--white)", background: "#636161" }}
                  >
                    {data.map((pemesan, idx) => (
                      <tr style={{ color: "var(--bs-light)" }}>
                        <td>{pemesan.nama}</td>
                        <td>{pemesan.paket}</td>
                        <td>{pemesan.email}</td>
                        <td>{pemesan.nomer}</td>
                        <td>{pemesan.alamat}</td>
                        <td>{pemesan.jadwal}</td>
                        <td style={{ width: 278 }}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{ background: "var(--bs-red)" }}
                            value={pemesan.id_pemesan}
                            onClick={(e) => hapusPemesan(e.target.value)}
                          >
                            TOLAK
                          </button>
                          <span>&nbsp; &nbsp; &nbsp;&nbsp;</span>
                            <button
                              className="btn btn-primary"
                              type="button"
                              style={{ background: "var(--bs-yellow)" }}
                              onClick={(e) => pindahData(e.target.value)}
                            >
                              TERIMA
                            </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
}
