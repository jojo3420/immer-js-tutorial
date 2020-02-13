import React, { useRef, useState, useCallback } from 'react';

function NoUseImmerJs() {
  const nextId = useRef(1);
  const [form, setForm] = useState({
    userId: '',
    username: ''
  });
  const [data, setData] = useState({
    arr: [],
    uselessValue: null,
  });

  const handleChange = useCallback(e => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    })
  }, [form]);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    const info = {
      id: nextId.current,
      userId: form.userId,
      username: form.username,
    };

    setData({
      ...data,
      arr: data.arr.concat(info)
    });

    setForm({
      userId: '',
      username: ''
    });

    nextId.current +=1
  }, [data, form.userId, form.username]);


  const handleRemove = useCallback(id => {
    setData({
      ...data,
      arr: data.arr.filter(info => info.id !== id),
    });
  }, [data]);


  return (
    <div>
      <h3>immer.js 사용하지 않고 불변성을 유지</h3>
      <form
        onSubmit={handleSubmit}
        >
        <input
          name="userId"
          placeholder="userId"
          value={form.userId}
          onChange={handleChange}
        />
        <input
          name="username"
          placeholder="username"
          value={form.username}
          onChange={handleChange}
          />
          <button type="submit">OK</button>
      </form>
      <div>
        <ul>
          {data.arr.map(info => (
            <li key={info.id}
              onClick={() => handleRemove(info.id)}
            >
              {info.userId} ({info.username})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NoUseImmerJs;
