import React from 'react';

export class newblock extends React.Component {
    render() {
        return (
            <div class="Appcomponent">
                <p><img alt='/' src='https://dummyimage.com/400x400/000/cccccc.jpg' /></p>
                <p>{this.props.data.title.value}</p>
                <p>{this.props.data.datum.value}</p>
            </div>
        )
    }
}

export default newblock;
//<h3>{this.props.data[2].title}</h3>