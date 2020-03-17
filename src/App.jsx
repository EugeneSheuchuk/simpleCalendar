import React, {useEffect} from 'react';
import './App.module.css';
import Month from "./components/month/Month";
import {connect} from "react-redux";
import {setCurrentYearAC} from "./redux/dateReducer";
import style from './App.module.css'

function App({setCurrentYear, currentYear, daysOfWeek, monthsNames}) {
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const list = [];
    for (let i = 0; i < 12; i++) {
        list.push(<Month currentYear={currentYear}
                         month={i}
                         daysOfWeek={daysOfWeek}
                         monthsNames={monthsNames}
                         key={`${currentYear}-${i}`}/>)
    }

    return (
        <div className={style.mainBoard}>
            <div className={style.year}>{currentYear}</div>
            <div className={style.months}>{list}</div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentYear: state.date.currentYear,
        monthsNames: state.date.monthsNames,
        daysOfWeek: state.date.daysOfWeek,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setCurrentYear(year) {
            dispatch(setCurrentYearAC(year))
        },
    };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
