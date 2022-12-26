// import { useState } from "react";
// import Styles from '../login/Style.module.css';
// const Login =() =>{
//     const [email, setEmail] = useState(''); 
//     const [password, setPassword] = useState(''); 
//     const [Lmsg, setLMsg] = useState(''); 
//     const [user, setUser] = useState(''); 
//     const [session, setSession] = useState(''); 
//     return (
//     <>
//     <div style= {{fontSize:"2em", color:"#789c90", textAlign:"center"}}>
//           ورود به حساب کاربری
//       </div>
//       <div className={`${Styles.reg-form}`}>
//           نام کاربری:
//           <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="لطفا نام کاربری را وارد کنید" /><br/>
//           رمز عبور:
//           <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="لطفا رمز عبور خود را وارد کنید" /><br/>
//     </div>
//     <div>
//       <button className={`${Styles.submit}`} onClick={Login}>ورود</button><br/>
//       </div>
//     <p>{Rmsg}</p>

//     </>
//     );
// }
// export default Login;