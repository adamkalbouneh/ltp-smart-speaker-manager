import { useState, useEffect } from "react"

const Week = ({ currentWeek }) => {
    const daysOfWeek = Object.keys(currentWeek);

    return (
        <div className="w-1/2">
            {daysOfWeek.map((day) => (
                <div key={day}>
                    <h2>{day}</h2>
                    <div>
                        <span>M: {currentWeek[day].M ? '✔' : '❌'}</span>
                        <span>A: {currentWeek[day].A ? '✔' : '❌'}</span>
                        <span>E: {currentWeek[day].E ? '✔' : '❌'}</span>
                        <span>N: {currentWeek[day].N ? '✔' : '❌'}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

const Day = ({ setCurrentWeek, currentWeek, currentDay }) => {
    const today = currentWeek[currentDay];

    const [values, setValues] = useState(today);

    useEffect(() => {
        setValues(currentWeek[currentDay]);
    }, [currentDay, currentWeek]);

    const handleInputChange = (period) => {
        const updatedValues = { ...values, [period]: !values[period] };
        setValues(updatedValues);
        setCurrentWeek({ ...currentWeek, [currentDay]: updatedValues });
    };

    return (
        <div className="w-1/2 flex flex-row text-sm justify-around">
            <div className="flex flex-col">
                <span>Morning</span>
                <inpu
                    type="checkbox"
                    checked={values.M}
                    onChange={() => handleInputChange("M")}
                />
            </div>
            <div className="flex flex-col">
                <span>Afternoon</span>
                <input
                    type="checkbox"
                    checked={values.A}
                    onChange={() => handleInputChange("A")}
                />
            </div>
            <div className="flex flex-col">
                <span>Evening</span>
                <input
                    type="checkbox"
                    checked={values.E}
                    onChange={() => handleInputChange("E")}
                />
            </div>
            <div className="flex flex-col">
                <span>Night</span>
                <input
                    type="checkbox"
                    checked={values.N}
                    onChange={() => handleInputChange("N")}
                />
            </div>
        </div>
    );
};

function HomePageStatus() {

    const [currentWeek, setCurrentWeek] = useState({
        Monday: { M: false, A: true, E: false, N: false },
        Tuesday: { M: false, A: false, E: false, N: false },
    })

    return (
        <div className="flex h-full flex-col items-center justify-center">
            <div className="flex w-full flex-row justify-between">
                <Week currentWeek={currentWeek} />
                <Day currentDay="Tuesday" currentWeek={currentWeek} setCurrentWeek={setCurrentWeek} />
            </div>
        </div>
    )
}

export default HomePageStatus