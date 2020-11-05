import React from 'react'

const HOC = (colorMe) => (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                color: colorMe
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} color={this.state.color} />
            )
        }
    }
}

export default HOC