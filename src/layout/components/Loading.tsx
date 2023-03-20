import Spinner from "../../components/Spinner";
import styles from "./Loading.module.scss";

const Loading = () => {
   return (
      <div className={styles.wrapper}>
         <Spinner></Spinner>
      </div>
   );
};

export default Loading;
