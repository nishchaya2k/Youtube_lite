import React, {useState,useEffect,createContext} from "react";
import { fetchDataFromApi } from "../utils/api";

/*The context object can then be used to store data that needs to be shared between 
components.

Once you have created a context, you can use it to store data in any component. 
To do this, you can use the Provider component. The Provider component takes a value 
prop as an argument and provides that value to all of its children.

You can use contexts to store any type of data that you need to share between
components. This can be useful for things like the current theme, the current user,
or the current state of the application.
*/
export const Context = createContext();

//component which contains all the logic which we make it globally available
export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectedCategory)
    },[selectedCategory])  //whenever the category change  useEffect called and then inside function called then api called

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {   //data is in key called contents so we have destructured it
        console.log(contents)
        setSearchResults(contents)
        setLoading(false)
       })
    };
    return(
        /* this provider takes value, which are all states and methods so that
         they are available globally in website*/  
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            selectedCategory,
            setSelectedCategory,
            mobileMenu,
            setMobileMenu,
        }}> 
            {props.children}
        </Context.Provider>
    )
}

