import CartWidget from './cartWidget';
export default function NavBar() {
	return (
		<nav className="navbar">
			<div className="layoutheader-content">
				<div className="header-logo">
					<h2>
						Mi<span style={{color: '#fff'}}>Ecommerce</span>
					</h2>
				</div>

				{/* Enlaces */}
				<div className="layoutheader-navbar">
					<h2>Inicio</h2>
					<h2>Productos</h2>
					<h2>Contacto</h2>
				</div>

				{/* Carrito */}
				<CartWidget />
			</div>
		</nav>
	);
}
