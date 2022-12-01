import supabase from "../common/data/subabaseClient";
export const getAllPosts= async ()=> {
    let {data , error} = await supabase.from ("post").select("*");
    return {data , error};
};
