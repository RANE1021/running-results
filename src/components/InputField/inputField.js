import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class InputField extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.props.onChange(event.target.id, event.target.value)
    }

    render() {
        const input = this.props
        return (
            <div className="form-group">
                <label htmlFor={input.id}>{input.label || input.name}</label>
                <input
                    className="form-control"
                    id={input.id}
                    name={input.name}
                    onChange={this.onChange}
                    type={input.type} />
            </div>
        )
    }
};

InputField.defaultProps = {
    type: 'text'
}

export default  InputField;
