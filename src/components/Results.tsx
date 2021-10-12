type ResultsPropsType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string
    }
}
const Results = (props: ResultsPropsType) => {
    return(
        <div>
        {props.results.cityName && <div className="result-city">{props.results.cityName}</div>}
        {props.results.country && <div className="result-country">{props.results.country}</div>}
        {props.results.temperature && <div className="result-temperature">{props.results.temperature}℃</div>}
        {props.results.conditionText && <div className="result-condition"><img src={props.results.icon} alt="icon"/>
                                        <span>{props.results.conditionText}</span></div>}

        </div>

    );
};

export default Results;