import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Comment() {
  const [pageNum, setPageNum] = useState(1);
  const [comments, setComments] = useState<string[]>([]); // 전체 Comments
  const [commentsOnPage, setCommentsOnPage] = useState<string[]>([]); // 현 페이지의 코멘트
  // Comments의 최대 개수 가져오고, prev next 버튼으로 다음
  // 1페이지 당 comment 개수 10개

  // axios
  //   .get(`/comment/${pageNum}`)
  //   .then((res) => {
  //     setComments(res.data);
  //   })
  //   .catch((err) => console.log(err));
  // setComments(["안녕","메롱", "이건", "Test"])
  // useEffect(() => {
  //   setCommentsOnPage(comments.slice(pageNum * 10, pageNum * 10 + 10));
  // }, [comments, pageNum]);
  // const pages = [1,2,3,4,5,6,7,8,9,10]

  const pageButtons = [...Array(10)].map((num, idx) => {
    const page = (pageNum % 10) + idx;
    return (
      <td
        key={page}
        style={{
          display: `${
            page <= (comments.length % 10) + 1 ? 'inline-block' : 'none'
          }`,
        }}
      >
        {(pageNum % 10) + idx}
      </td>
    );
  });

  return (
    <main>
      If you have visited here. Please leave me any comment. So that I can be
      better myself
      <table>
        <tbody>
          <tr>
            <td
              onClick={() => setPageNum((pageNum % 10) - 10)}
              style={{ visibility: pageNum % 10 == 0 ? 'visible' : 'hidden' }}
            >
              next
            </td>
            {pageButtons}
            <td
              onClick={() => setPageNum((pageNum % 10) + 10)}
              style={{
                visibility:
                  pageNum % 10 == comments.length % 10 ? 'visible' : 'hidden',
              }}
            >
              next
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Comment;
