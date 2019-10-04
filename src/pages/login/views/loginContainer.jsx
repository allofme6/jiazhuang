import React, { Component } from 'react'

import connect from './connect'

import store from 'store'



@connect
class loginContainer extends Component {
    render() {
        return (
            <div>
                文章详情
            </div>
        )
    }

    componentDidMount() {
        this.props.loadData('hahah')
        //用了redux-immutable所以合并的store里的state也是一个map结构需要用get
        console.log(store.getState().get('home').get('list'))

        setTimeout(() => {
            console.log(store.getState().home)
        },4000)
    }
}

export default loginContainer