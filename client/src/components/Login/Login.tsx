import React from 'react';

interface Props {
    isShowLogin : boolean
}
export default function Login({isShowLogin} : Props) {
  return (
    <div className={`${isShowLogin?"active":""}`}>
      <form>
        {/* <input>ID</input> */}
        {/* fix로 화면 중앙에 뜨게 하면 될 듯 */}
      </form>
    </div>
  );
}
