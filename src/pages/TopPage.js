import React, { useEffect, useContext } from 'react'
import { fetchGetData } from '../apis/index'
import { Store } from '../store/index'
import { GET_DATA } from '../actions/index'
import Card from '../components/Card'

const TopPage = () => {
    const { globalState, setGlobalState } = useContext(Store)
    useEffect(() => {
        fetchGetData().then(res => {
            setGlobalState({
                type: GET_DATA,
                data: res.data
            })
        })
    }, [])

    console.log(globalState)

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                globalState.user_data.map((user, index) => {
                    return (
                        <Card user={user} key={index} />
                    )
                })
            }
        </div>
    )
}
export default TopPage