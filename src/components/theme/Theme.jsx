import React from 'react';
import style from './Theme.module.css';

function Theme({ name, value, action }) {

	return (
		<div className={style.theme}>
			{name}: <span onClick={() => action()}>{value}</span>
		</div>
	);
}

export default Theme;
