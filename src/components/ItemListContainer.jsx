export default function ItemListContainer({ saludo }) {
	return (
		<div
			style={{
				width: 'min(85%, 1600px)',
				margin: '150px auto',
				padding: '0 20px',
				textAlign: 'center',
			}}
		>
			<h2>{saludo}</h2>
		</div>
	);
}
