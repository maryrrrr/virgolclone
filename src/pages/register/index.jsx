// import { useState } from "react";
// import Styles from '../register/Style.module.css';
// const Register = () =>{
//     const [email, setEmail] = useState(''); 
//     const [password, setPassword] = useState(''); 
//     const [username, setUsername] = useState('');
//     const [Rmsg, setRMsg] = useState(''); // Registration message
//     return (
//         <>
//         <div style= {{fontSize:"2em", color:"#789c90", textAlign:"center"}}>
//             ایجاد حساب کاربری
//         </div>
//         <div className={`${Styles.reg-form}`}>
//             ایمیل:
//             <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="لطفا ایمیل خود را وارد کنید" /><br/>
//             نام کاربری:
//             <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="لطفا نام کاربری را وارد کنید" /><br/>
//             رمز عبور:
//             <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="لطفا رمز عبور خود را وارد کنید" /><br/>
//       </div>
//       <div>
//         <button className={`${Styles.submit}`} onClick={Register}>ثبت</button><br/>
//       </div>
//       <p>{Rmsg}</p>
//         </>
//     );
// }
// export default Register;