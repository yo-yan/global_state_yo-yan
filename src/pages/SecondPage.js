import React, { useEffect, useContext } from 'react';
import { GET_TODO_DATA } from '../actions';
import { fetchGetTodoData } from '../apis/index';
import { Store } from '../store/index';
import CardSecond from '../components/CardSecond';

const SecondPage = () => {
    const { globalState, setGlobalState } = useContext(Store)
    useEffect(() => {
        fetchGetTodoData().then(res => {
            setGlobalState({
                type: GET_TODO_DATA,
                todo: res.data
            })
        })
        // eslint-disable-next-line
    }, [])

    console.log(globalState)

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                globalState.comment_todo.map((comment, index) => {
                    return (
                        <CardSecond comment={comment} key={index} />
                    )
                })
            };
        </div>
    )
}

export default SecondPage