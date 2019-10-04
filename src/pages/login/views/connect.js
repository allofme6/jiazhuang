import { connect } from 'react-redux'

import { loadData } from '../actionCreator'
// import { set } from 'immutable'


const mapState = (state) => {
    //需要这样拿到state里的值
    console.log(state.get('home').get('list'))
  return {
    list: 1
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData(data) {
        dispatch(() => {
            setTimeout(() => {
                dispatch(loadData(data))
            },3000)
        })
    }
  }
}

export default connect(mapState, mapDispatch)