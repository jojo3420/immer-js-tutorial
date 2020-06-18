import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';


function UseImmerJs() {
  const idRef = useRef(1);
  const [form, setForm] = useState({
    userId: '', userName: ''
  });
  const [data, setData] = useState({
    list: [],
    useLessData: null,
  });

  const handleForm = useCallback(e => {
    const { name, value } = e.target;

    // 1. 정석 방식
    // setForm(form => produce(form, draft => {

    // 2. 축약 방식 q
    setForm(produce(draft => {
      draft[name] = value;
    }))
  }, []);

  const handleInsert = useCallback(e => {
    e.preventDefault();
    // 1. 정석 방식
    // setData(prevData => produce(prevData, draft => {

    // 2. 축약 하여 사용 가능
    setData(produce(draft => {
      draft.list.push({
        ...form
      });
    }));

    setForm({
      userId: '',
      userName: '',
    });

  }, [form]);

  return (
    <div>
      <h2>use immer.js</h2>
      <form onSubmit={handleInsert}>
        <div>
          <label>userId:
            <input
              type="text"
              name="userId"
              value={form.userId}
              onChange={handleForm}
            />
          </label>
        </div>
        <div>
          <label>userName:
            <input
              type="text"
              name="userName"
              value={form.userName}
              onChange={handleForm}
            />
          </label>
        </div>
        <button type="submit">INSERT</button>
      </form>
      <ul>
        {data.list.map(user => <li key={user.id}>{user.userId} - {user.userName}</li>)}
      </ul>
    </div>
  );
}

export default UseImmerJs;
