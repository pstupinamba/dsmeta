import icon from '../../img/notification-icon.svg'
import './styles.css'

function NotificatioButton() {
    return (
        //para colocar mais de um component, é necesário colocá-los dentro da tag <></>
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificatioButton
