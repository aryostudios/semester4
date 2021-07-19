 export default function Home() {
  return (
    <div>
      <section className="login-clean">
        <form method="post" style={{ background: "var(--bs-dark)" }}>
          <h2 className="visually-hidden">Login Form</h2>
          <div className="illustration">
            <ion-icon name="person" style={{ color: "var(--bs-warning)" }} />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="username"
              name="username"
              placeholder="Username"
              style={{ borderRadius: 19 }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              style={{ borderRadius: 19 }}
              required
            />
          </div>
          <div className="mb-3">
            <a
              href="/admin/konfirmasi"
              className="btn btn-primary d-block w-100"
              type="submit"
              style={{ background: "var(--bs-yellow)", borderRadius: 42 }}
            >
              Log In
            </a>
          </div>
          <a className="forgot" href="#">
            Forgot your email or password?
          </a>
        </form>
      </section>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
