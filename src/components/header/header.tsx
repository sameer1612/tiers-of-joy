export default function Header() {
  return (
    <nav className="navbar shadow-sm">
      <div className="container-fluid mx-4">
        <h1 className="navbar-brand mb-0">Tiers of Joy</h1>
        <a
          href="http://github.com/sameer1612/tiers-of-joy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          Github
          <i className="ms-2 bi bi-box-arrow-up-right"></i>
        </a>
      </div>
    </nav>
  );
}
