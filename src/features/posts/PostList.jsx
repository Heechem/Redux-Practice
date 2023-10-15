import { useSelector } from 'react-redux';
import { selectPostsIds, getPostsStatus, getpostsError } from './postsSlice';

import PostExcerpt from './PostExcerpt';

const PostList = () => {
  const postStatus = useSelector(getPostsStatus);
  const orderedPostIds = useSelector(selectPostsIds);
  const error = useSelector(getpostsError);

  let content;

  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt
        key={postId}
        postId={postId}
      />
    ));
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostList;
