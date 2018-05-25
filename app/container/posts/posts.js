import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ListView } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as postsActions from '../../actions/posts';
import { styles } from './style';

function mapStateToProps(state)
{
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        actions: bindActionCreators(postsActions, dispatch)
    };
}

class Posts extends React.Component
{
    static propTypes = {
        posts: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    componentDidMount()
    {
        this.props.actions.postsGet();
    }

    rendorRow(rowData)
    {
        return (
            <View style={styles.container}>
                <Image style={styles.thumbnail} source={{ uri: rowData.thumbnail }} />
                <Text style={styles.rightContainer}>{rowData.title}</Text>
            </View>
        );
    }

    render()
    {
        const { posts } = this.props;
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        return (
            <View>
                <ListView
                    style={styles.listView}
                    enableEmptySections={true}
                    dataSource={ds.cloneWithRows(posts.list)}
                    renderRow={this.rendorRow}
                />
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
