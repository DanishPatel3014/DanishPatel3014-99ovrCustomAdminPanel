import Logo from "../assets/images/logo/logo.png";

export default function Sidenav() {
  function dd() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
  }
  function addnav() {
    var element = document.getElementById("navadd");
    element.classList.toggle("open");
  }
  return (
    <div>
      <div
        class="main-menu menu-fixed menu-dark menu-accordion menu-shadow"
        data-scroll-to-active="true"
      >
        <div class="navbar-header">
          <ul class="nav navbar-nav flex-row">
            <li class="nav-item me-auto daslogo">
              <a
                class="navbar-brand"
                href="../../../html/ltr/vertical-menu-template-dark/index.html"
              >
                <span class="brand-logo">
                  <img src={Logo} alt="logo" />
                </span>
                <h2 class="brand-text">99OVR</h2>
              </a>
            </li>
            <li class="nav-item nav-toggle">
              <a
                class="nav-link modern-nav-toggle pe-0"
                data-bs-toggle="collapse"
                onClick={() => dd()}
              >
                <i class="fal fa-times feather feather-x d-block d-xl-none text-primary toggle-icon font-medium-5"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
          <ul
            class="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li class=" navigation-header">
              <span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span>
              <i data-feather="more-horizontal"></i>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="app-email.html">
                <i class="fal fa-cube"></i>
                <span class="menu-title text-truncate" data-i18n="Email">
                  Animation
                </span>
              </a>
            </li>
            <li class=" nav-item">
              <a class="d-flex align-items-center" href="app-email.html">
                <i class="fal fa-envelope-open"></i>
                <span class="menu-title text-truncate" data-i18n="Email">
                  Email
                </span>
              </a>
            </li>
            <li class=" nav-item has-sub" id="navadd" onClick={() => addnav()}>
              <a class="d-flex align-items-center" href="#">
                <i class="fal fa-file-alt"></i>
                <span class="menu-title text-truncate" data-i18n="Invoice">
                  Invoice
                </span>
              </a>
              <ul class="menu-content">
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="app-invoice-list.html"
                  >
                    <i class="fal fa-circle"></i>
                    <span class="menu-item text-truncate" data-i18n="List">
                      List
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="app-invoice-preview.html"
                  >
                    <i class="fal fa-circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Preview">
                      Preview
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="app-invoice-edit.html"
                  >
                    <i class="fal fa-circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Edit">
                      Edit
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex align-items-center"
                    href="app-invoice-add.html"
                  >
                    <i class="fal fa-circle"></i>
                    <span class="menu-item text-truncate" data-i18n="Add">
                      Add
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}