import styles from '../styles/Button.module.css';
import Modal from '../components/Modal';
import containerStyle from '../styles/Anleitung.module.css';
import { Link } from 'react-router-dom';

const Anleitung = () => {
    return(
        <Modal>
            <div className={containerStyle.wrapper}>
            <h2>Anleitung</h2>
            <p>Hier ist die ganze Anleitung:</p>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem reiciendis est ducimus, quod sed error dolores dolor laudantium, beatae facere blanditiis dignissimos. Aliquid earum animi esse reiciendis atque voluptatem ab vitae id eveniet? Sunt hic nihil magnam error quos accusamus nisi at similique quam dolorum pariatur soluta impedit, repellat fugit!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat a, adipisci molestiae id eos enim, veniam maiores libero recusandae non magnam exercitationem unde est, labore earum minima incidunt nihil. Fugit aperiam molestiae numquam commodi hic corporis dicta exercitationem, odio dolores sunt et. Unde sint laudantium magni ab quidem ipsa iure, officia totam numquam atque harum, sed praesentium molestias quasi. Ab aperiam quae enim laudantium ipsum amet dolorum quidem, qui ratione consequuntur maiores placeat. Sit commodi, eos recusandae obcaecati temporibus totam a aut cupiditate, itaque placeat, laboriosam molestias rem ut libero quo dignissimos facere? Sapiente qui saepe dolorem ratione asperiores voluptatem quia labore? Labore unde quidem corrupti quae est vel, voluptas debitis culpa? Odio reiciendis eaque facilis ducimus accusantium tempore nobis voluptatem totam! Esse, delectus. Accusamus impedit commodi pariatur numquam laudantium! Ducimus corporis natus aut. Sint illum magnam eius quaerat, ab dolor, eaque consequuntur odio maiores nobis, aliquid delectus. Debitis!</p>
      <section className={styles.actions}>
        <Link to="/" className={styles.button}>
          Zurück
        </Link>
      </section>
      </div>
        </Modal>
    );
};

export default Anleitung;