import React, { useEffect, useState } from "react";

function SearchBar (props) {
    const {searchText, setSearchText} = props
    const [inputText, setInputText] = useState('')

    useEffect(() => {
        let timer1 = setTimeout(() => {
            setSearchText(inputText)
        }, 1000)
        return () => {
            clearTimeout(timer1)
        }
    }, [inputText])

    useEffect(() => {
        console.log(999)
    }, [])

    return (
        <label>
            <input value={inputText} onChange={e => {setInputText(e.target.value)}}/>
        </label>
    )
}

export default SearchBar