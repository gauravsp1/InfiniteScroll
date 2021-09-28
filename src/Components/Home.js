import axios from 'axios'
import React, { useEffect, useState } from 'react'
//Components
import DisplayCard from './DisplayCard'
import MainSkeleton from './Skeleton/MainSkeleton'


function Home() {
    //States
    const [cardData, setCardData] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [loading, setLoading] = useState(false)
console.log("cardData",cardData);
    //Functions
    function addNewCardData() {
        setPageNo((PreviousValue) => PreviousValue + 1)
    }

    window.onscroll = function () {
        const { scrollHeight, scrollTop, clientHeight } = document.documentElement

        if (Math.round(scrollTop + clientHeight) >= scrollHeight) {
            setLoading(true)
            addNewCardData()
        }
    }

    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://randomuser.me/api/?page=${pageNo}&results=5&seed=abc`).then((response) => {
                console.log("Response", response.data.results)
                setCardData((PreviousValue) => {
                    return [...PreviousValue, ...response.data.results]
                })
                setLoading(false)
            }).catch((error) => {
                console.log("Errors", error);
                setLoading(false)
            })
        }, 1500)
    }, [pageNo])




    return (
        <div className="homeContainer">
            {cardData.length > 0 ? cardData.map((value, index) => {
                return <DisplayCard key={value.cell} cardValue={value} />
            }) : <>
                <MainSkeleton />
                <MainSkeleton />
                <MainSkeleton />
            </>
            }
            {loading &&
                <>
                    <MainSkeleton />
                    <MainSkeleton />
                    <MainSkeleton />
                </>}
        </div>
    )
}

export default Home
