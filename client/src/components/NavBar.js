function NavBar() {
    return (
        <div style={{display: 'block', position: 'absolute', marginLeft: 'auto', marginTop: '15%'}}>
            <div style={{display:'flex', flexDirection: 'column', border: '1px solid white', height: '500px', width: '100px'}}>
            <span>Home</span>
            <span>Login</span>
        </div>
        </div>
    )
}

export default NavBar;