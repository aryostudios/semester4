import LayoutAdmin from "../../component/admin/layoutAdmin";
export default function Home() {
  return (
    <>
      <LayoutAdmin>
        <div className="col" style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "ABeeZee, sans-serif" }}>TERBAYAR</h1>
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
                      <th>Email</th>
                      <th>Nomer</th>
                      <th>Alamat</th>
                      <th>Jadwal</th>
                      <th style={{ textAlign: "center" }}>Column 1</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{ color: "var(--bs-light)", background: "#636161" }}
                  >
                    <tr>
                      <td>Cell 1</td>
                      <td>Cell 2</td>
                      <td>Cell 2</td>
                      <td>Cell 2</td>
                      <td>Cell 2</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          type="button"
                          style={{
                            background: "var(--bs-red)",
                            borderStyle: "solid",
                          }}
                        >
                          HAPUS DATA
                        </button>
                      </td>
                    </tr>
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
