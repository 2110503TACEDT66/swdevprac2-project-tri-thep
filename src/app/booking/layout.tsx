import styles from './booking.module.css'
import Booking from './page';

export default function BookingLayout({children}:{children:React.ReactNode}) {
    return (
        <div className={styles.sectionlayout}>
           
            {children}
        </div>
    );
}