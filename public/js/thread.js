// function addCommentHandler() {
//   document.getElementById("comment-box").style.display = "";
//   console.log('clicked');
// }

const submitCommentHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');
    const content = document.querySelector('#comment-content').value.trim();

    if (content) {
      const response = await fetch(`/api/posts/new-comment`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create project');
      }
    }
  };

// document
//   .querySelector('.add-comment')
//   .addEventListener('click', addCommentHandler);

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', submitCommentHandler);
