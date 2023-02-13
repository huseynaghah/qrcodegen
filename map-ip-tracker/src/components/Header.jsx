import React, { useContext, useEffect, useState } from 'react'
import styles from "../components/Header.module.css"
import arrow from "../assets/icon-arrow.svg"
import { myContext } from '../App';
import { Info } from "./Info"
// import { useDispatch, useSelector } from 'react-redux';
// import { save } from '../store/ipSlice';

export default function Header() {



    const [ip, setIp] = useState("");
    // const [info, setInfo] = useState('');

    let {address, setAddress} = useContext(myContext)
    // const dispatch = useDispatch();


    const getMyIp = () => {
        fetch("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_QPzi3Q6oQr4DybRHHZI6lrEarxPZV&ipAddress=" + ip)
            .then(res => res.json())
            .then(data => {
                setAddress("")
                setAddress(data)
            })
            .catch(err => setInfo(err))
    }

   

    // var map = L.map('map', {
    //     center: [51.505, -0.09],
    //     zoom: 13
    // });

    // let myGettedData = useSelector(state => state.ipReducer)
    // console.log(myGettedData)

    return (<>
        <div className={styles.header}>
            <p className={styles.text}>IP Address Tracker</p>
            <div className={styles.searchbar}>
                <input type="text" name="" id="" className={styles.inputEl} placeholder="Search for any IP address or domain" onChange={(e) => setIp(e.target.value)} />
                <button className={styles.buttonEl} onClick={() => getMyIp()}>
                    <img src={arrow} />
                </button>
            </div>
        {address && <Info data={address} />}

        </div>
        
    </>

    )
}
