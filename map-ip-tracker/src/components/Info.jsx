import React, { useContext } from 'react'
import styles from "../components/Info.module.css"
import { myContext } from '../App'



export const Info = (props) => {

    // const {info } = useContext(myContext)

  return (
<>    { props.data &&  <div className={styles.infotab}>
    <div className={styles.infotabEL}>
        <p className={styles.pEl}>IP address</p>
        <div> {props.data.ip} </div>
    </div>
    {props.data.location && <div className={styles.infotabEL}>
        <p className={styles.pEl}>Location</p>
        <div> {props.data.location.city}, {props.data.location.country} {props.data.location.postalCode} </div>
    </div>}
    {props.data.location && <div className={styles.infotabEL}>
        <p className={styles.pEl}>Timezone</p>
        <div> {props.data.location.timezone} UTC </div>
    </div>}
    {props.data && <div className={styles.infotabEL}>
        <p className={styles.pEl}>ISP</p>
        <div> {props.data.isp} </div>
    </div>}
</div>}
</>
  )
}
