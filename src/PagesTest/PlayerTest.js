import React, { Component } from 'react';
import MediaHeader from '../components/PlayPage/MediaHeader';
import FlowPlayerPage from '../components/PlayPage/modules/FlowPlayerPage';

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            type: '',
            resource: {},
            isLoading: true,
            historyParams: '',
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getMediaID()

        const params = this.props.history.location.search;
        this.setState({
            historyParams: params
        });
    }

    getMediaID(){
        const param = this.props.location.search.split(/=|&/);
        this.setState({
            id: param[1],
            type: param[3],
        });
        this.fetchData(param[1]);
    }

    fetchData(id){
        const api = `https://k-play-api.herokuapp.com/media/${id}`
		fetch(api)
		.then(res => res.json())
		.then(data => {
			this.setState({
                resource: data,
                isLoading: false,
			})
		})
		.catch(error => console.log(error))
    }

    render() {

        const style = {
            height: '200px',
            width: '100%',
            backgroundColor: '#131313',
        }

        return (
            <div>
                <MediaHeader isLoading={ this.state.isLoading } media_id={ this.state.id } resource={ this.state.resource } prevParams={ this.state.historyParams } />
                { !this.state.isLoading && <FlowPlayerPage playerPageLoading={ this.state.isLoading } resource={ this.state.resource } /> }

                <footer style={ style }>

                </footer>
            </div>
        );
    }
}

export default Player;
