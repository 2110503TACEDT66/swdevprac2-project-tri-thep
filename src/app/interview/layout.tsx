import styles from './interview.module.css'
import Interview from './page';

export default function InterviewLayout({children}:{children:React.ReactNode}) {
    return (
        <div className={styles.sectionlayout}>
           
            {children}
        </div>
    );
}