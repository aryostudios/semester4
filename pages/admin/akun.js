import LayoutAdmin from "../../component/admin/layoutAdmin";
import { useUser } from "../../lib/swr-fetch";
import Router from "next/router";
import Link from "next/link"
import { mutate } from "swr";

export default function Home() {
  const { data, error } = useUser();
  if (error) {
    return <div>Error Loading</div>;
  }
  if (!data) {
    return <div>Loading.....</div>;
  }

  async function hapusUser(id_user) {
    //setDeleting (true)
    let res = await fetch(`/api/hapusUser?id_user=${id_user}`, {
      method: "DELETE",
    });
    let json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate(`/api/hapusUser`);
    //setDeleting (false)
    alert("User telah dihapus");
    Router.push("/admin/login");
  }

  return (
    <>
      <LayoutAdmin>
        <div className="col" style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "ABeeZee, sans-serif" }}>ACCOUNT</h1>
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
                      <th>Username</th>
                      <th style={{ textAlign: "center" }}>Email</th>
                      <th style={{ textAlign: "center" }}>Keterangan</th>
                      <th style={{ textAlign: "center" }} />
                    </tr>
                  </thead>
                  <tbody
                    style={{ color: "var(--white)", background: "#636161" }}
                  >
                    {data.map((user, idx) => (
                      <tr style={{ color: "var(--bs-light)" }}>
                        <td>{user.nama}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.keterangan}</td>
                        <td style={{ width: 278 }}>
                        <Link href={`./ubahAkun?nama=${user.nama}&username=${user.username}&email=${user.email}&password=${user.password}&keterangan=${user.keterangan}`}>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{ background: "var(--bs-yellow)" }}
                          >
                            UBAH
                          </button>
                          </Link>
                          <span>&nbsp; &nbsp; &nbsp;&nbsp;</span>
                          <button
                            className="btn btn-primary"
                            type="button"
                            style={{ background: "var(--bs-red)" }}
                            value={user.id_user}
                            onClick={(e) => hapusUser(e.target.value)}
                          >
                            HAPUS
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
