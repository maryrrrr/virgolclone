import {supabase} from "../common/data/supabaseClient";
export const getAllCategories= async ()=> {
    let {data , error} = await supabase.from ("category").select("*");
    return {data , error};
};

