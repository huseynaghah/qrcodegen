import React, { useContext } from 'react'
import styles from "../components/Info.module.css"
import { myContext } from '../App'



export const Info = (props) => {



    const { address } = useContext(myContext)
  

  return (
<>  <div className={styles.infooo}>
  { address &&  <div className={styles.infotab}>
    <div className={styles.infotabEL}>
        <p className={styles.pEl}>IP address</p>
        <div> {address.ip} </div>
    </div>
    {address.location && <div className={styles.infotabEL}>
        <p className={styles.pEl}>Location</p>
        <div> {address.location.city}, {address.location.country} {address.location.postalCode} </div>
    </div>}
    {address.location && <div className={styles.infotabEL}>
        <p className={styles.pEl}>Timezone</p>
        <div> {address.location.timezone} UTC </div>
    </div>}
    {address && <div className={styles.infotabEL}>
        <p className={styles.pEl}>ISP</p>
        <div> {address.isp} </div>
    </div>}
</div>}
</div>
</>
  )
}
