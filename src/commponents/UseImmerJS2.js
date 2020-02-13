import React, {useRef, useCallback, useState} from 'react';
import produce from 'immer';


function UseImmerJS2(props) {
  const nextId = useRef(1);
  const [form, setForm] = useState({
    userId: '',
    username: ''
  });
  const [data, setData] = useState({
    array: [],
    unUseData: null,
  });

  const handleChange = useCallback(e => {
    const {name, value} = e.target;
    setForm(
      produce(formDraft => {
        console.log('handleChange formData: ', formDraft);
        formDraft[name] = value;
      })
    );
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    const {userId, username} = form;
    const newInfo = {id: nextId.current, userId, username};
    setData(
      produce(draftData => {
        console.log("submit - draftData: ", draftData);
        draftData.array.push(newInfo);
      })
    );

    setForm({
      userId: '',
      username: '',
    });

    nextId.current += 1;

  }, [form.userId, form.username]);


  const handleRemove = useCallback(userId => {
    setData(
      produce(draftData => {
        console.log('remove: draftData; ', draftData);
        const idx = draftData.array.findIndex(info => info.userId === userId);
        draftData.array.splice(idx, 1);
      })
    );
  }, []);
  return (
    <div>
      <h3>immer.js 불변성 유지하기2</h3>
      <p>produce() 함수 매개변수로 함수1개만 전달하는 축약 방식</p>
      <form onSubmit={handleSubmit}>
        <input name="userId" value={form.userId} onChange={handleChange} placeholder={"uerId"}/>
        <input name="username" value={form.username} onChange={handleChange} placeholder={"username"}/>
        <button type="submit">OK</button>
      </form>
      <div>
        {data.array.map(info => (
            <li key={info.userId} onClick={() => handleRemove(info.userId)}>
              {info.userId} ({info.username})
            </li>
          )
        )}
      </div>
    </div>
  );
}

export default UseImmerJS2;
