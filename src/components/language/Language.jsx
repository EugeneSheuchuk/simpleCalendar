import React from 'react';
import style from './Language.module.css';
import flags from './../../assets/flags/flags_responsive.png'


function Language({ value, position, action = () => {}, lang }) {
	const svgStyle = {
		'backgroundImage': `url(${flags})`,
		'backgroundPosition': `0 ${position}px`,
		'backgroundRepeat': ` no-repeat`,
		'backgroundSize': 'cover',
		'width': '20px',
		'height': '14px',
		'display': 'inline-block',
		'border': '1px solid gray'
	};

	return (
		<div className={style.language}
			 onClick={() => action(lang)}>
			<span style={svgStyle}></span> {value}
		</div>
	);
}

export default Language;