import React from 'react';
import { connect } from 'react-redux';

import UserHeader from './UserHeader';
import { fetchUsersAndPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchUsersAndPosts();
    }

    renderList() {
        return this.props.posts.map((post) => {
            return (
                <div className='item' id={post.id}>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className='ui relaxed divided list'>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchUsersAndPosts })(
    PostList
);
