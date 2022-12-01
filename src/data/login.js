import { supabase } from "../common/data/supabaseClient"
const Login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if(error){
      setLMsg(error.message)
    }else{
      setLMsg('Login successfully')
      setUser(data.user)
      setSession(data.session)
      console.log(data.session)
    }
  }