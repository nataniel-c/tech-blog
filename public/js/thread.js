const submitCommentHandler = async (event) => {
  
  event.preventDefault();
  console.log('submitted');
  const content = document.querySelector('#comment-content').value.trim();
  const postNum = document.location.pathname.match(/\d+/);
  const post_id = postNum[0];
  console.log(post_id);

  if (content && post_id) {
    const response = await fetch(`/api/posts/new-comment`, {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', submitCommentHandler);
