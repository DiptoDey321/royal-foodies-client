import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Royal foddies - ${title}`;
    } ,[title])
};

export default useTitle;