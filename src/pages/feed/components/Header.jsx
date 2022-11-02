import Styles from "../Styles.module.css"; 
import Logo from "../../../assets/logo2.jfif";
const Header = ()=> {
    return(
        <>
            <div className= {'${Styles.header} ${Styles.wrapper}'}>
                <div>
                    <img className={'${Styles.logo}'} src={Logo} alt="Logo" />
                </div>
                <div className= {'${Styles.authlinks}'}>
                    <a src="/">ثبت نام</a>
                     <a src="/">ورود</a>
                </div>
            </div>
        </>);

}
export default Header;