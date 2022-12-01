import supabase from "../common/data/subabaseClient";
const Register = async () => {
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
    },
    {
      data: {
        username
      }
    })
    if(error){
      setRMsg(error.message)
    }else{
      setRMsg('User created successfully')
      setUser(data.user)
    }
  }