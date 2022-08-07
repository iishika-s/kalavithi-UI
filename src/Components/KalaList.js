import React from 'react';

const KalaList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.kalas.map((kala, index) => (
				<div className='image-container'>
					<img src={kala.url} alt='kala'></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default KalaList;