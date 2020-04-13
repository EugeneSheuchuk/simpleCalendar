import React from 'react';
import Language from '../../components/language/Language';
import style from './Languages.module.css';

function Languages({ currentLanguage, languages, action }) {
	const languagesArray = [];
	for ( let key in languages ) {
		if ( key === currentLanguage ) continue;
		languagesArray.push([languages[key], key]);
	}
	const langs = languagesArray.map((item, index) =>
		<Language value={item[0][0]}
				  position={item[0][1]}
				  key={`${item[0][0]}-${index}`}
				  lang={item[1]}
				  action={action}/>);
	return (
		<div className={style.main}>
			<Language value={languages[currentLanguage][0]}
					  position={languages[currentLanguage][1]}/>
			<div className={style.menu}>
				{langs}
			</div>
		</div>
	);
}

export default Languages;