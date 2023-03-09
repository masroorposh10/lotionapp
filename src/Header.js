function Header({ toggleSidebar }) {
  return (
    <div className="navigation-bar">
                <div>
                    <button onClick={toggleSidebar} className="button">
                        <div class="menu-icon">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>
                    </button>

                </div>
                <h1 className="title">
                    <p id='upper'>Lotion</p>
                    <p id='des'>Like Notion, But Worse</p>
                </h1>
                <div className="spacer"></div>
            </div>

  );
}
export default Header;