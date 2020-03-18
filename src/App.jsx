import React from 'react';
import './App.module.css';
import Month from "./components/month/Month";
import {connect} from "react-redux";
import {changeCurrentYearAC} from "./redux/dateReducer";
import style from './App.module.css'

function App({currentYear, daysOfWeek, monthsNames}) {

    const list = [];
    for (let i = 0; i < 12; i++) {
        list.push(<Month currentYear={currentYear}
                         month={i}
                         daysOfWeek={daysOfWeek}
                         monthName={monthsNames[i]}
                         key={`${currentYear}-${i}`}/>)
    }

    return (
        <div className={style.mainBoard}>
            <div className={style.year}>
                <div className={`${style.header} ${style.prev}`}
                     onClick={() => changeCurrentYear(-1)}>Previous
                </div>
                <div className={`${style.header} ${style.center}`}>{currentYear}</div>
                <div className={`${style.header} ${style.next}`}
                     onClick={() => changeCurrentYear(1)}>Next
                </div>
            </div>
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
        changeCurrentYear(change) {
            dispatch(changeCurrentYearAC(change))
        }
    };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
