import myImage from './logo.png';
export function NetflixHeader() {
    return (
        <div className='headerContent d-flex justify-content-between pt-3'>
            <div>
                <img alt="Banner Not Found" src={myImage} className="banner ms-2" />
            </div>
                <div className="d-flex me-3 mt-3">
                    <div className="d-flex dropdown">
                        <button className="langBtn btn border btn-dark dropdown-toggle bg-black" data-bs-toggle="dropdown">
                            <span className="bi bi-globe"></span> English
                        </button>
                        <div className="dropdown-menu bg-secondary collapse bg-white">
                            <div><a href="#" className="dropdown-item text-dark" id="ab">English</a></div>
                            <div><a href="#" className="dropdown-item text-dark" id="cd">हिन्दी</a></div>
                        </div>
                        <button className="signInBtn btn btn-danger ms-3">Sign In</button>
                    </div>
                </div>
            </div>
    )
}