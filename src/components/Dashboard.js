import React from 'react'
import GridLayout from './GridLayout'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editName: { name: "" }
        }
    }

    deleteMe = (id) => {
        this.setState({ userDetails : this.state.userDetails.filter(item => item.id !== id )})
    }

    editMe = (id) => {
        const findData = this.props.userData.find(item => item.id == id)
        this.setState({ editName : findData})
    }

    
    saveEditData = (id) => {
        // const oldData = this.props.userData.find(item => item.id == this.state.editName.id)
        // const newName = this.state.editName.name;

        // const data = this.props.userData.map(item => {
        //     if (item.id === oldData.id) {
        //         return {...item, name: newName};
        //       } else {
        //         return item;
        //       }
        // });
        this.props.userNameUpdate({ id: this.state.editName.id, name: this.state.editName.name})
        // this.setState({ userDetails: data })
    }

    handleChange = (evt) => {
        this.setState({ editName: {...this.state.editName, name: evt.target.value }})
    }


    render() {
        console.log(this.props.userData, 'userData')
        return (
            <>
                <div><h2>My User Details</h2></div>
                <div>
                    <input type="text" value={this.state.editName.name} onChange={(evt)=>{ this.handleChange(evt) }}/>
                    <button onClick={() => { this.saveEditData(this.state.editName.editId) }} >Save</button>
                </div>
                <div><ul>{this.props.userData.map((item, ind) => {
                    return <GridLayout key={ind} item={item} deleteMe={this.deleteMe} editMe={this.editMe}/>
                })
                }</ul></div>
            </>
        )
    }
};

const mapStateToProps = state => ({
    userData: state.userDetails ? state.userDetails : []
})

const mapDispatchToProps = dispatch => ({
    userNameUpdate: (val) => dispatch({ type: 'UPDATE_USERNAME', payload: val })
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

// Mounting, Updating, Unmounting