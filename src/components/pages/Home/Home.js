import React, { useEffect, useState } from 'react';
import './Home.css';
export const Home = () => {
    const [filterseult, setfilterseult] = useState([])
    var [serch, setserch] = useState([])
    useEffect(() => {
        fetch("filter.json")
            .then(res => res.json())
            .then(data => {
                setfilterseult(data)
                setserch(data)
            })
    }, [])
    /* ====================== search result show =============== */
    const [choice, setChoice] = useState();
    if (choice) {
        serch = filterseult.filter(country => {
            return country.name.toLowerCase().indexOf(choice.toLowerCase()) !== -1;
        });
    }
    const [location, setlocation] = useState();
    const [room, setBethroom] = useState();
    const [prices, setprices] = useState();
    const [time, setTima] = useState();
    /* ====================== date select result time =============== */
    if (time) {
        serch = filterseult.filter(country => {
            return country.when.toLowerCase().indexOf(time.toLowerCase()) !== -1;

        });
    }
    {/* ===================== filter result submit =================  */ }
    const submit = (location, prices, room) => {

        if (!location && !prices && !room) {
            return;
        }
        const pri = parseInt(prices)

        serch = filterseult.filter(country => {
            return country?.location?.toLowerCase().indexOf(location?.toLowerCase()) !== -1 || pri >= parseInt(country?.prics) || country?.ditils?.Bethroom == room

        })
        setserch(serch)

    }
    return (
        <>
            {/* ===================== search area =================  */}
            <div className='search_are'>
                <h1>Search properties to rent</h1>
                <input className='search_input' onChange={(e) => setChoice(e.target.value)} type="text" placeholder="Search" required />
            </div>
            {/* ============== filter section area  ==================  */}
            <div className='filtering-are'>
                <select className='filter_option' value={choice} defaultValue={"default"}
                    onChange={(e) => setlocation(e.target.value)}
                >
                    <option value={"default"} disabled>
                        Choose Location
                    </option>
                    <option value={"India"}>India</option>
                    <option value={"Bangladesh"}>Bangladesh</option>
                    <option value={"Canada"}>Canada</option>
                    <option value={"Japan"}>Japan</option>
                    <option value={"United States"}>United States</option>
                    <option value={"Australia"}>Australia</option>
                    <option value={"Switzerland"}>Switzerland</option>
                </select>
                <select className='filter_option' value={choice} defaultValue={"default"}
                    onChange={(e) => setBethroom(e.target.value)}
                >
                    <option value={"default"} disabled>
                        Choose Bethroom
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                </select>
                <select className='filter_option' value={choice} defaultValue={"default"}
                    onChange={(e) => setprices(e.target.value)}
                >
                    <option value={"default"} disabled>
                        Choose  Prics
                    </option>
                    <option value={500} >$ 500-1000</option>
                    <option value={1500}>$ 1200-1500</option>
                    <option value={2000}>$ 1550-2000</option>
                    <option value={2900}>$ 2100-2900</option>
                    <option value={4000}>$ 3000-4000</option>
                    <option value={5000}>$ 4100-5000</option>
                    <option value={9000}>$ 5050-9000</option>
                </select>
                <input className='filter_option' onChange={(e) => setTima(e.target.value)} type="Date" required />
                <button className='filter_submit-btn' onClick={() => submit(location, prices, room)}>Submit</button>
            </div>
            <div className="row">
                {
                    serch.map(sh => <div key={sh.id} className="column">
                        <div className="card">
                            <div className='card_control'>
                                <img className='images_size' src={sh.images} />
                                <div className='card_text-content'>
                                    <div className='card_text-content_titel'>
                                        <h1 className='card_text-content_prices'>$ {sh.prics} /<span>month</span></h1>
                                        <span>X</span>
                                    </div>
                                    <h1 >{sh.name}</h1>
                                    <h4 className='card_text-content_dis'>{sh.ditils.dis}</h4>
                                    <h4 className='card_text-content_dis'>Location : {sh.location}</h4>
                                    <hr />
                                    <div className='card_text-content_titel'>
                                        <h4>Beds: {sh.ditils.Beds}</h4>
                                        <h4>Bethroom: {sh.ditils.Bethroom}</h4>
                                        <h4>area: {sh.ditils.area}</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </>

    )
}
