import React, { Fragment } from "react"
import "./Room.css"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { sendingTheFinalRoom, openPayment } from '../Actions/action'
import M from 'materialize-css'

const Room = (props) => {

    var onClickhandler = () => {
        props.gettingFinalRoom(props.id)
        props.openPayment(true)
        var instance = M.Tabs.getInstance(document.querySelector('.tabs'));
        instance.select('resvTab');
    }

    return (
        <Fragment key={props.id}>

            <div id={props.id} className="Room">
                <img src={props.source} alt="" className="pic" />
                <header className="type" >Room is available</header>
                <span className="from">From : {props.price}/pernight</span>

                <Fragment>
                    <div className="title">Bed Option</div>
                    <div className="bed">{props.bedtype} </div>
                </Fragment>
                <button onClick={onClickhandler} className="checkout btn">Checkout</button>
            </div>
        </Fragment>

    )
}

const maptostate = state => {
    return {
        checkin: state.dates.check_in,
        checkout: state.dates.check_out,
    }
}

const maptoprops = dispatch => {
    return {
        gettingFinalRoom: (roomNumber) => dispatch(sendingTheFinalRoom(roomNumber)),
        openPayment: (cond) => dispatch(openPayment(cond))
    }
}

export default withRouter(connect(maptostate, maptoprops)(Room))
