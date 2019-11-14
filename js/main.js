"use strict";

let addCommentBtn = document.getElementById("js-add-comment");
let commentText = document.getElementById("text-comment");
let commentList = document.getElementById("comment-list");

addCommentBtn.addEventListener("click", addComment);
commentText.addEventListener('keyup', e => e.keyCode === 13 && e.ctrlKey && addComment(e));

function addComment (e){
  e.preventDefault();
  let commentBlock = document.createElement('div');
  commentBlock.className="block-comment";
  commentBlock.innerHTML = `<div class="block-comment__text"><p>${commentText.value}</p></div>`;
  commentList.append(commentBlock);
  commentText.value = '';
}

