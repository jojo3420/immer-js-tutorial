import React, {useRef, useCallback, useState} from 'react';
import produce from 'immer';


function UseImmerJS(props) {
  const nextId = useRef(1);
  const [form, setForm] = useState({
    userId: '',
    username: '',
  });
  const [data, setData] = useState({
    arr: [],
    noUseValue: null,
  });

  const handleChange = useCallback(e => {
    const {name, value} = e.target;
    setForm(
      produce(form, draftForm => {
        draftForm[name] = value
      })
    );
  }, [form]);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    const {userId, username} = form;
    setData(
      produce(data, draftData => {
        draftData.arr.push({id: nextId.current, userId, username})
      })
    );
    setForm({
      userId: '',
      username: ''
    });

    nextId.current += 1;

  }, [data, form.userId, form.username]);

  const handleRemove = useCallback(userId => {
    setData(
      produce(data, draftData => {
        const idx = draftData.arr.findIndex(info => info.userId === userId);
        draftData.arr.splice(idx, 1);
      })
    );

  }, [data]);

  return (
    <div>
      <h3>immer.js 이용하여 불변성 유지하기</h3>
      <form
        onSubmit={handleSubmit}
      >
        <input
          name="userId"
          value={form.userId}
          onChange={handleChange}
          placeholder={'userId'}
        />
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder={'username'}
        />
        <button type="submit">OK</button>
      </form>
      <div>
        <ul>
          {data.arr.map(info => (
            <li
              key={info.userId}
              onClick={() => handleRemove(info.userId)}
            >{info.userId} ({info.username})</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UseImmerJS;
